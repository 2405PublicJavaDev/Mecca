# 프로젝트
MeCCa - (게임 매칭/커뮤니티 사이트)

# 팀 소개
JustDoIt은 오늘도 ‘그냥 해보자’로 시작! 시도하고, 배우고, 그 과정을 즐기는 팀입니다. 항상 실험하고 도전하는 재미로 프로젝트를 이끌어 가자는 의미에서 JustDoIt으로 정하게 되었습니다.

# 프로젝트 소개
본 커뮤니티 사이트는 게임 매칭의 핵심 가치를 강화하고 기존의 문제점을 보완하기 위해 개발되었습니다.
정확한 게임 매칭과 지속적인 파트너십을 통해, 단순한 일회성 만남이나 비게임 중심의 소통을 지양하고, 실질적인 게임 플레이에 초점을 맞춥니다.
다양한 게임 장르를 지원하며, 직관적인 인터페이스를 제공하여 사용자가 자신의 취향과 실력에 맞는 파트너를 효과적으로 찾을 수 있도록 지원합니다.

# Demo Video
https://youtu.be/APIdnWsIC0k

# 기획 의도 및 서비스 분석
## 기획 의도 및 분석 
본 커뮤니티 사이트는 게임 매칭의 핵심 가치를 강화하고 기존의 문제점을
보완하기 위해 개발되었습니다. 정확한 게임 매칭과 지속적인 파트너십을 통해, 단순한 일회성 만남이나 비게임 중심의 소통을 지양하고, 실질적인 게임 플레이에 초점을 맞춥니다. 다양한 게임 장르를 지원하며, 직관적인 인터페이스를 제공하여 사용자가 자신의 취향과 실력에 맞는 파트너를 효과적으로 찾을 수 있도록 지원합니다.

## 유사 사이트 분석
<Duo.gg>
장점:
1. 맞춤형 매칭
사용자 맞춤형 매칭 시스템이 뛰어나며, 자신의 실력과 플레이 스타일에 맞는 파트너를 쉽게 찾을 수 있음.
2. 커뮤니케이션 도구
사이트 내 채팅 기능을 통해 신속하게 소통할 수 있어 파트너와의 협업이 원활함.

단점:
1. 제한된 게임
주로 리그 오브 레전드에 국한되어 있으며, 다른 게임에 대한 지원 부족 다양한 게임을 즐기는 사람들에게 제한적임.
2. 커뮤니티 활성화 부족
게임 외적인 소통이나 커뮤니티 활동이 부족하여, 단순한 매칭 외의 추가적인 사회적 상호작용 부족함.
3. 번거로운 매칭 방식
사용자가 매칭 게시글을 올리면, 다른 사용자가 그 게시글을 보고 매칭 버튼을 눌러 매칭이 성사되면 롤에서 서로의 아이디를 직접 입력하고 친구로 등록하는 번거로운 방식임

<lita>
장점:
1. 매칭 시스템의 유용성
사용자 맞춤형 매칭 시스템이 효과적이며, 자신의 게임 스타일과 실력에 맞는 파트너를 찾는 데 유용함.
2. 프로필 관리
상세한 프로필 설정과 게임 통계 제공으로, 자신의 실력을 잘 나타낼 수 있음.
 
단점:
1. 소개팅 어플처럼 변질된 문제
리타가 원래의 게임 매칭 목적 외에도 소개팅 어플처럼 사용되는 경우가 많아, 본래의 매칭 기능이 혼란스러워짐. (이는 게임 매칭의 전문성에 악영향을 미칠 수 있음)
2. 커뮤니티의 혼잡함
커뮤니티 기능이 활성화 되면서 게임 매칭 외의 다양한 활동이 혼합되어, 사용자가 본래의 목적을 잃을 수 있음.

# 차별성
다양한 장르 서비스
: 롤에 한정된 커뮤니티에서 벗어나, 다양한 장르의 게임에서 서비스가 이루어질 수 있도록 커뮤니티 확장 추진

간편한 매칭 방식
: 매칭 인원이 모두 모이면 채팅방이 형성되어 보다 편리한 매칭 시스템

깨끗한 커뮤니티 활성화
: 커뮤니티 활성화를 도모하며, 이용 목적 변질을 방지하기 위한 관리자 페이지 개설

# 주요 기능 
+ 1. Login
: [  Login ]을 시도할 때  Main Page에서 직접 접속하는 방법과 [ 회원가입 / 
비밀번호 찾기 ] 기능을 경유해 Login Page에서 접속하는 방법으로 나누어
구현합니다. 
 [ Login ]을 할 때 Email, Password를 입력해서 실행합니다.만약 사용자가 로그인 정보를 잃어버렸을 때 아이디, 비밀번호 찾기를 통해서 찾을 수 있습니다. 

1-1 사용자 정보 조회 ( mypage )
: 로그인이 완료된 사용자는 [ 회원가입 ]을 할 당시 정보, 활동 내역( 댓글, 작성글 ), 쪽지 ( 메세지 )등 을 조회할 수 있고 수정하기, 회원 탈퇴 기능 또한 수행할 수 있게 합니다.
  Password, Nickname, 프로필 사진, 사용자 한줄 소개를 사용자가 수정할 수 있습니다. 

1-2 회원 탈퇴
: 회원 탈퇴를 시행할 경우, 탈퇴 의사 확인을 통해 진행할 수 있습니다. 

+ 2. 관리자 페이지
: 관리자 페이지는 관리자 계정에 한해서 접속할 수 있는 페이지입니다. 

2-1 고객센터 게시판
 : 사이트 이용자들이 작성한 1:1 문의, 신고에 관련된 모든 작성문을 조회 할 수 있는 페이지 입니다.
 관리자는 1:1문의 답변, 신고 글에 답변, 삭제 등을 수행할 수 있습니다. 게시판에 1:1 문의 답변 , 신고글 조회됩니다. 
 신고글 게시판에는 신고된 글( 포스팅 된 글 제목, 댓글 전문 )이 게시됩니다. 게시된 글 우측에 작성자 제재, 신고자 제재 할 수 있는 버튼을 설정합니다.
 작성자 제재를 실행할 경우 제재기간을 설정하는 팝업창이 활성화 되고 제재를 완료하는 순간 신고된 글 ( 포스팅 된 글 전문, 댓글 )이 블라인드 처리되고 제재된 기간만큼 글 작성자의 활동 정지를 시작합니다.
 신고자 제재를 선택할 경우에는 제재기간을 설정하는 팝업창이 활성화 되고 제재기한을 정하면 신고자 제재가 적용됩니다. 

+ 3. 회원가입
: 사용자가 [ 회원 가입 ]을 이용할 때 카카오 인증을 하지 않고 시도할 경우에는 Email, Nickname, Password를 입력 받고 Email, Nickname은 유효성 체크를 합니다.  카카오 인증을 통해 가입할 경우에는 nickname만 따로 입력받아 진행하게 됩니다.
Email는 입력한 Email을 사용 합니다.
Password는 유효성 체크( 자릿수 확인, 특수문자 및 대문자 포함 )합니다.
Password-Check를 통하여 입력했던 Password를 다시 한 번 입력하여 일치 여부를 확인합니다.

+ 4. 비밀번호 찾기
: [ 비밀번호 찾기 ]는 사용자가 [ 회원가입 ]을 했을 때 기재한 Email을 통해 임시 비밀번호를 발급, 확인 후 새로운 비밀번호를 설정합니다.
 이 때, Password 설정은 [ 회원가입 ]의 Password-check 방법을 기반으로 합니다.

+ 5. 자유 게시판
: [ 자유 게시판 ]에서는 회원들이 글쓰기, 검색 및 조회, 수정하기 및 삭제하기 기능을 사용할 수 있습니다. 
 또한 게시판에서 노출되는 게시글의 작성자의 Nickname, 조회수, 추천수를 표시하여 회원들이 알 수 있습니다. 

5-1 글 쓰기
: 글쓰기는 [ Login ]을 한 사용자들에 한해서 사용할 수 있는 기능으로 설정합니다.
 글쓰기에서는 toast ui editor api를 활용하여 글꼴, 크기, 색상, 밑줄, 강조표시 등을 사용할 수 있는 환경을 구축합니다. 

5-2 수정하기 및 삭제하기
: 수정하기는 글쓴이가 자신이 업로드한 글에 한해서 활성화 할 수 있도록 합니다.
제목, 내용, 글꼴, 크기, 색상, 밑줄, 강조표시등에 한하여 수정 있고 삭제도 가능하게 합니다.

5-3 검색 및 조회
:  검색 및 조회는 Select Box를 사용하여 사용자가 원하는 카테고리로 게시된 글을 조회 할 수 있게 합니다. Select Box의 목록은 최신순, 조회, 추천수로 구분해서
선택 조회가 가능합니다.

+ 6. 매칭 게시판
: [ 매칭 게시판 ]에서는 글쓰기, 검색 및 조회, 수정하기 및 삭제하기 기능을 사용할 수 있게 구현합니다. 글을 작성할 때 게임의 종류, 명칭을 설정할 수 있도록 합니다.

6-1 글 쓰기
: 사용자가 원하는 게임 및 장르, 사용자의 등급, 파티의 인원수, 내용을 작성 후 등록하기를 실행하면 게시판에 등록됩니다. 글을 기재할 때 게임 Email는 필수 기재항목으로 설정합니다.

6-2 수정하기 및 삭제하기
: 수정, 삭제하기는 글쓴이가 자신이 업로드한 글에 한해서 활성화 할 수 있도록 합니다.

6-3 조회 및 검색 
사용자가 글을 조회 
작성한 사용자의 글에 매칭 신청
조회한 사용자의 정보를 글을 작성한 사용자에게 전달
글을 작성한 사용자는 전달받은 정보를 확인 
조건에 맞는 사용자인지 글 작성자가 판단
수락 / 거절 결정
사이트에 작성자와 작성자가 수락한 신청자의 대화방 생성
: 게시판 이용자가 구인글을 작성, 조회를 할 수 있습니다. 게시판에 글을 열람한 사용자가 작성자 글의 내용을 확인 후 “신청하기” 버튼을 누르면 글 작성자에게 신청이들어가고 작성자가 수락을 하여 모든 정해지면 채팅을 할수있다
파티장이 게임 “시작하기” 종료되면 “종료하기” 버튼도 설정해 둡니다. 

파티장이 “종료하기”를 눌러 파티가 해산되면 바로 [ 별점 매기기 ] 기능이 활성화 될 수 있도록 합니다.

+ 7. 별점 매기기 ( 매너 점수 )
: 매칭 게시판을 통해 매칭된 사용자 서로에게 상대에 대한 별점( 매너 점수 )를 매길 수 있는 팝업 창이 활성화됩니다. 매너 점수에 대한 별점( 매너 점수 )를 입력받습니다. 
점수를 책정하는 방식은 ‘좋아요’는 +1, ‘싫어요’는 -1로 최소 수치를 0으로 합니다.
 사용자 정보 조회에서 자신이 받은 별점( 매너 점수 )를 확인할 수 있습니다. 
 반영 된 매너 점수를 가져와 개인 프로필에 평균치를 업로드 합니다. 
이 때, 최종적으로 확정된 점수를 토대로  상위 5명을 뽑아매칭 게시판 좌측 상단 우수 플레이어에 반영될 수 있도록 합니다. 

# 개발 환경
+프론트엔드: Reactjs
+백엔드: Spring Boot
+개발도구(IDEA): IntelliJ, Visual Studio code
+형업도구: Git Hub, Git Hub Desktop 

# 작업 일정
1주차: 기획 회의
2주차: UI/DB 설계
3주차: 클래스 설계 및 프로젝트 구현
4주차: 오류 수정 및 제출















