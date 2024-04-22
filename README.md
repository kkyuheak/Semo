# 오류

클라이언트 컴포넌트 안에서 getArtList() 함수 호출 시 api키 undefined로 뜨는 오류가 남. 서버 컴포넌트에서는 정상적으로 호출 가능.

해결 => .env 파일에 있는 api키는 서버 컴포넌트에서 호출가능. 하지만 클라이언트 컴포넌트에서 호출하면 undefined가 뜨기 때문에 .env파일 안에 있는 api키 앞에 NEXT_PUBLIC을 붙여서 사용함
