package com.JustDoIt.Mecca.OJS.controller;

import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.service.RequestService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.common.Pagination;
import com.JustDoIt.Mecca.OJS.vo.Request;
import jakarta.servlet.http.HttpSession;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("/api/matching")
public class MatchingController {

    private MatchingService mService;
    private RequestService sService;

    public MatchingController() {}
    @Autowired
    public MatchingController(MatchingService mService, RequestService sService) {
        this.mService=mService;
        this.sService=sService;
    }

    @GetMapping("/main")
    public String showMainForm() {
        return "OJS/matchingmain";
    }
    @GetMapping("/register")
    public String showRegisterForm(HttpSession session
                                    ,Model model) {
        int count=mService.checkgame((String)session.getAttribute("uEmail"));
        int count2=sService.checkgame((String)session.getAttribute("uEmail"));
        int sum=count+count2;
        model.addAttribute("sum",sum);
        return "OJS/matchingWrite";
    }
    @ResponseBody
    @RequestMapping(value="/register" ,method=RequestMethod.POST)
    public String insertMatching(Matching insertMatching,
                               @RequestParam(value="matching") String[] matching
                                ,HttpSession session) {


            insertMatching.setMWriterEmail((String) session.getAttribute("uEmail"));
            insertMatching.setMGenre(matching[0]);
            insertMatching.setMTag(matching[1]);
            insertMatching.setMNickname(matching[2]);
            insertMatching.setMTierOrLevel(matching[3]);
            insertMatching.setMMaxParty(Integer.parseInt(matching[4]));
            insertMatching.setMContent(matching[5]);
            insertMatching.setMCurrentParty(0);
            System.out.println(insertMatching.toString());

            int result = mService.insertMatching(insertMatching);

            return "Hello!!";


    }
    @RequestMapping(value="/search" ,method = {RequestMethod.GET, RequestMethod.POST})
    public String searchList(@RequestParam(value="cp", required=false,defaultValue="1") Integer currentPage
                             ,@RequestParam Map<String,String> searchMap
                             ,Model model
                            ,HttpSession session){
//        Map<String,String> paramMap= new HashMap<String,String>();
//        paramMap.put("searchCondition",searchCondition);
//        paramMap.put("searchKeyword",searchKeyword);
        System.out.println(searchMap);
        int totalCount=mService.getsearchTotalCount(searchMap);
        Pagination pn = new Pagination(totalCount,currentPage);
        int limit=pn.getBoardLimit();
        int offset=(currentPage-1)*limit;
        RowBounds rowBounds=new RowBounds(offset,limit);


        List<Matching> mList=mService.searchList(rowBounds,searchMap);
        System.out.println("searchKeyword");
        model.addAttribute("mList",mList);
        model.addAttribute("pn",pn);
        model.addAttribute("searchKeyword",searchMap.get("searchKeyword"));
        model.addAttribute("searchCondition",searchMap.get("searchCondition"));
        model.addAttribute("memberId",session.getAttribute("uEmail"));

        return "OJS/matchingsearch";
    }




    @GetMapping("/list")
    public String showmatchingList(@RequestParam(value="cp", required=false,defaultValue="1") Integer currentPage
            , Model model
            ,HttpSession session){
        int totalCount=mService.getTotalCount();
        Pagination pn = new Pagination(totalCount,currentPage);
        int limit=pn.getBoardLimit();
        int offset=(currentPage-1)*limit;
        RowBounds rowBounds=new RowBounds(offset,limit);
        List<Matching> mList=mService.selectList(currentPage, rowBounds);
        model.addAttribute("mList",mList);
        model.addAttribute("pn",pn);
        model.addAttribute("memberId",session.getAttribute("uEmail"));


        return "OJS/matchingmain";
    }
    @GetMapping("/detail/{matchingNo}")
    public String showDetailForm(@PathVariable("matchingNo") Integer matchingNo,
                                 Model model,
                                 HttpSession session) {
        int count=mService.checkgame((String)session.getAttribute("uEmail"));
        int count2=sService.checkgame((String)session.getAttribute("uEmail"));
        int sum=count+count2;

        Matching match=mService.selectOne(matchingNo);
        model.addAttribute("match",match);
        model.addAttribute("mainId",session.getAttribute("uEmail"));
        model.addAttribute("sum",sum);
        System.out.println(match.toString());
        return "OJS/detail";
    }
    @GetMapping("/application")
    public String applicationgame(@RequestParam("matchingNo") Integer matchingNo
                                  ,@RequestParam("message") String message
                                    ,Model model
                                    ,HttpSession session) {

        Matching match=mService.selectOne(matchingNo);
        Request Request=new Request();
        Request.setMrMNo(match.getMNo());
        Request.setMrWriterEmail(match.getMWriterEmail());
        Request.setMrRequesterEmail((String)session.getAttribute("uEmail"));
        Request.setMrRequesterNickname(message);
        System.out.println("Request:"+Request.toString());
        int result=sService.applicationgame(Request);
        model.addAttribute("Request",Request);
        return "redirect:/api/matching/requestlist?MemberId="+(String)session.getAttribute("uEmail");
    };
    @GetMapping("/requestlist")
    public String showapplication(@RequestParam("MemberId") String MemberId,
                                  Model model) {
        System.out.println(MemberId);

        List<Matching> mList=mService.searchOne(MemberId);
        List<Request> rList=sService.registersearch(MemberId);
        List<Request> aList=sService.applicationsearch(MemberId);



        model.addAttribute("rList",rList);
        model.addAttribute("aList",aList);
        model.addAttribute("mList",mList);

        return "/OJS/request";
    }
    @GetMapping("/accep")
    public String gameaccep(@RequestParam("mrNo") Integer mrNo,
                            @RequestParam("mrMNo") Integer mrMNo
                            ,HttpSession session
                            ){
        int result= sService.accep(mrNo);
        result=mService.minplus(mrMNo);

        return "redirect:/api/matching/requestlist?MemberId="+(String)session.getAttribute("uEmail");
    }
    @GetMapping("/refusal")
    public String gamerefusal(@RequestParam("mrNo") Integer mrNo,
                              @RequestParam("mrMNo") Integer mrMNo
                                ,HttpSession session){


        int result= sService.refusal(mrNo);
        result=mService.minsub(mrMNo);
        return "redirect:/api/matching/requestlist?MemberId="+(String)session.getAttribute("uEmail");
    }
    @GetMapping("/login")
    public String showlogin(){

        return "/OJS/login";
    }

    @PostMapping("/login")
    public String loginregister(@RequestParam("uEmail") String uEmail
            , HttpSession session){

        session.setAttribute("uEmail",uEmail);
        return "OJS/main";
    }
    @GetMapping("/gamestart")
    public String gamestart(@RequestParam("mNo") Integer mNo
                            , HttpSession session){

        int result = mService.gamestart(mNo);

        return "redirect:/api/matching/requestlist?MemberId="+(String)session.getAttribute("uEmail");
    }
    @GetMapping("/gameend")
    public String gameend(@RequestParam("mNo") Integer mNo
            , HttpSession session){

        int result = mService.gameend(mNo);

        return "redirect:/api/matching/requestlist?MemberId="+(String)session.getAttribute("uEmail");
    }

    @GetMapping("/gamecancel")
    public String gamecancel(@RequestParam("mNo") Integer mNo
            , HttpSession session){

        int result = sService.gamecancel(mNo);

        return "redirect:/api/matching/requestlist?MemberId="+(String)session.getAttribute("uEmail");
    }




}