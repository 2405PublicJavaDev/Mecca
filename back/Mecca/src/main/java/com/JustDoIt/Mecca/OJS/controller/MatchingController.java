package com.JustDoIt.Mecca.OJS.controller;

import com.JustDoIt.Mecca.OJS.service.MatchingService;
import com.JustDoIt.Mecca.OJS.service.SignalService;
import com.JustDoIt.Mecca.OJS.vo.Matching;
import com.JustDoIt.Mecca.OJS.vo.Pagination;
import com.JustDoIt.Mecca.OJS.vo.Signal;
import jakarta.servlet.http.HttpSession;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/matching")
public class MatchingController {

    private MatchingService mService;
    private SignalService sService;

    public MatchingController() {}
    @Autowired
    public MatchingController(MatchingService mService,SignalService sService) {
        this.mService=mService;
        this.sService=sService;
    }

    @GetMapping("/main")
    public String showMainForm() {
        return "OJS/matchingmain";
    }
    @GetMapping("/register")
    public String showRegisterForm() {
        return "OJS/matchingWrite";
    }
    @ResponseBody
    @RequestMapping(value="/register" ,method=RequestMethod.POST)
    public String insertMatching(Matching insertMatching,
                               @RequestParam(value="matching") String[] matching
                                ,HttpSession session) {

        insertMatching.setMemberId((String)session.getAttribute("memberId"));
        insertMatching.setMatchingCatagory(matching[0]);
        insertMatching.setMatchingGame(matching[1]);
        insertMatching.setMatchingId(matching[2]);
        insertMatching.setMatchingGrade(matching[3]);
        insertMatching.setMatchingmaxCount(Integer.parseInt(matching[4]));
        insertMatching.setMatchingContent(matching[5]);
        int result = mService.insertMatching(insertMatching);

        return "Hello!!";


    }
    @RequestMapping(value="/search" ,method = {RequestMethod.GET, RequestMethod.POST})
    public String searchList(@RequestParam(value="cp", required=false,defaultValue="1") Integer currentPage
                             ,@RequestParam Map<String,String> searchMap
                             ,Model model){
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

        return "OJS/matchingsearch";
    }




    @GetMapping("/list")
    public String showmatchingList(@RequestParam(value="cp", required=false,defaultValue="1") Integer currentPage
            , Model model){
        int totalCount=mService.getTotalCount();
        Pagination pn = new Pagination(totalCount,currentPage);
        int limit=pn.getBoardLimit();
        int offset=(currentPage-1)*limit;
        RowBounds rowBounds=new RowBounds(offset,limit);
        List<Matching> mList=mService.selectList(currentPage, rowBounds);



        model.addAttribute("mList",mList);
        model.addAttribute("pn",pn);
//		model.addAttribute("startNavi",1);
//		model.addAttribute("endNavi",10);

        return "OJS/matchingmain";
    }
    @GetMapping("/detail/{matchingNo}")
    public String showDetailForm(@PathVariable("matchingNo") Integer matchingNo,
                                 Model model) {
        Matching match=mService.selectOne(matchingNo);
        model.addAttribute("match",match);
        System.out.println(match.toString());
        return "OJS/detail";
    }
    @GetMapping("/application")
    public String applicationgame(@RequestParam("matchingNo") Integer matchingNo
                                  ,@RequestParam("message") String message
                                    ,Model model
                                    ,HttpSession session) {

        Matching match=mService.selectOne(matchingNo);
        int matchingminCount=match.getMatchingminCount()+1;

        int result=mService.minplus(matchingNo,matchingminCount);
        Signal signal=new Signal();
        signal.setMatchingNo(match.getMatchingNo());
        signal.setMainId(match.getMemberId());
        signal.setApplicationId((String)session.getAttribute("memberId"));
        signal.setApplicationMessage(message);
        signal.setApplicationSituation("0");
        signal.setGameSituation("0");
        System.out.println("signal:"+signal.toString());
        result=sService.applicationgame(signal);
        model.addAttribute("signal",signal);
        return "redirect:/matching/signallist?MemberId="+(String)session.getAttribute("memberId");
    };
    @GetMapping("/signallist")
    public String showapplication(@RequestParam("MemberId") String MemberId,
                                  Model model) {
        List<Signal> rList=sService.registersearch(MemberId);
        List<Signal> aList=sService.applicationsearch(MemberId);

        System.out.println(rList.toString());

        model.addAttribute("rList",rList);
        model.addAttribute("aList",aList);

        return "OJS/signal";
    }
    @GetMapping("/accep")
    public String gameaccep(@RequestParam("signalNo") Integer signalNo){
        int result= sService.accep(signalNo);

        return "OJS/signal";
    }
    @GetMapping("/refusal")
    public String gamerefusal(@RequestParam("signalNo") Integer signalNo,
                              @RequestParam("matchingNo") Integer matchingNo){

        System.out.println(matchingNo);
        int result= sService.refusal(signalNo);
        result=mService.minsub(matchingNo);
        return "OJS/signal";
    }
    @GetMapping("/login")
    public String showlogin(){

        return "OJS/login";
    }

    @PostMapping("/login")
    public String loginregister(@RequestParam("memberId") String memberId
            , HttpSession session){
        System.out.println("memberId:"+memberId);
        session.setAttribute("memberId",memberId);
        return "OJS/main";
    }




}