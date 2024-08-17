# Harry Potter

해리포터의, 해리포터 덕후들에 의한, 해리포터 덕후들을 위한 웹사이트
<br><br>

## 개발 환경

- **FrontEnd**: Next.js + Tailwind CSS
- **BackEnd:** Node.js(Express.js)
- **DB:** MySQL
- **Server:** AWS(EC2, RDS, S3)
- **Deploy:** github (github action, github page)
<br><br>

## 팀원

- 김민경
- 김서영
<br><br>

## 기능

***BGM을 함께 즐겨주세요!***

### 1️⃣ 기숙사 배정 후 회원가입

- 사용자의 성향을 파악할 수 있는 간단한 질문들을 통해 기숙사 배정

### 2️⃣ Potion Game

- 해리포터 영화에 등장하는 마법약들을 만드는 게임

### 3️⃣ Magic Game

- 해리포터 영화에 등장하는 주문들을 맞추는 게임
- 음성인식 가능

### 4️⃣ Quidditch Game

- 해리포터 영화에 등장하는 퀴디치를 1인모드로 즐길 수 있는 게임
<br><br>

## Technical Issues

### [BE]

사실 이번 주차에 이것저것 시도한 것은 참 많았으나.. 성공하지 못한 것이 대부분입니다… ㅠㅠ

1. docker를 이용하여 container 단위로 백엔드 프로젝트를 ec2 프리 티어 요금제에 직접 빌드하려 시도
    
    → 용량 부족으로 인해 빌드 불가
    
    → github action을 이용하여 docker container 및 docker images를 올리는 선택지 중
    
    후자를 선택하여 용량 부족 문제를 해결함
    
2. 코드를 수정했으나, docker container에 수정사항이 어느 시점부터 반영되지 않는 문제 발생
    
    → 아직 원인 파악 불가, 이때부터 docker 포기(ㅠㅠ)
    
3. spring boot 빌드 시도
    
    → 마찬가지로 용량 부족으로 인해 빌드 불가
    
    → memory swapping을 통해 실제 사용 가능한 메모리의 크기를 늘리는 선택지가 있긴 했으나, 남은 시간을 계산했을 때 spring boot 대신(ㅠㅠ) nodejs(expressjs)를 채택하여 사용
    
4. RDS, EC2 연결이 안됨
    
    → standard tcp/ip OVER SSH 방식으로 연결
    
    → 로컬이 아닌 ec2 환경에서도 .pem 파일 필요 ⇒ S3를 통해 ec2에 저장
    

### [FE]

**[배포]**

1. github pages를 처음 접해봐서 yml 파일 작성의 어려움
2. github pages가 https로 배포되기에, 백엔드 코드도 https로 배포했어야 했음 → domain을 하나 발급받아  프론트, 백 모두 https로 배포 완료

**[Next.js]**

1. server component와 client component를 분리하지 않아 build error 다수 발생
