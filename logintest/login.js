$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

// let 과 const의 차이
// let은 선언 단계와 초기화 단계가 분리되어 진행  || const는 선언단계와 초기화 단계가 동시에 진행

// 회원가입 하기

// 1. 회원가입 버튼 함수 만들기

function register() {
    // 내용 체크 하기

    const checkResult = checkJoinFields();
    // 변수앞에 !는 온값을 받아서 더 이상 받지않는다고 선언하는것 
    if(!checkResult){
        return;
    }
    // 회원가입 진행

    // username
    const usernameElenment = document.getElementById("username");
    // email
    const emailElenment = document.getElementById("email");
    // password
    const passwordElenment = document.getElementById("password");

    const newUser = {
        username: usernameElenment.value,
        email: emailElenment.value,
        password: passwordElenment.value
    }

    console.log(newUser);

    // 회원가입 완료 메세지
    alert("회원가입이 완료 되었습니다.")
    // 페이지 이동
    // window.location.href = "이동페이지";
}

// 2. 회원가입 내용 체크 함수 만들기
function checkJoinFields() {

    // id들
    
    // username
    const usernameElenment = document.getElementById("username");
    // email
    const emailElenment = document.getElementById("email");
    // password
    const passwordElenment = document.getElementById("password");
    // confirm-password
    const confirmPasswordElement = document.getElementById("confirm-password");

    // 유저 네임이 없으면 안됨
    if(usernameElenment.value == ""){
        alert("username을 입력해주세요.");
        usernameElenment.focus();
        return false;
    }

    // 이메일이 없으면 안됨
    if(emailElenment.value == ""){
        alert("email을 입력해주세요.");
        emailElenment.focus();
        return false;
    }

    // 비밀번호가 없으면 안됨
    if(passwordElenment.value == ""){
        alert("password을 입력해주세요.");
        passwordElenment.focus();
        return false;
    }

    // 비밀번호 확인이 없으면 안됨
    if(confirmPasswordElement.value == ""){
        alert("confirmassword를 입력해주세요.");
        confirmPasswordElement.focus();
        return false;
    }

    // 비밀번호와 비밀번화 확인이 동일해야됨
    // if(passwordElenment.value == "" || confirmPasswordElenment.value == ""){
    //     alert("password 와confirmPassword맞지 않습니다.");
    //     return false;
    // }

    // 모두 통과함
    return true;

}


// 로그인 하기

// 1. 로그인 버튼 함수 만들기

// 2. 로그인 내용 체크 함수 만들기