# 삼성웰스토리 하이브리드앱

## 작업범위

- 모바일 기준 디바이스 : Galaxy S3 이상

## 작업기간

2016-04 ~ 2016-05

## 앱 다운로드주소

~~https://play.google.com/store/apps/details?id=com.websqrd.welstory.plus/~~ (개발 이슈로 인한 프로젝트 중단)

## 코딩맵

[코딩맵 바로가기](https://purymaster.github.io/welstory/codingmap.html)

## HTML 코드 작성 규칙

- HTML은 해당 DTD의 명세에 맞게 작성한다.
- 마크업의 중첩이 깊어질 때마다 자식 엘리먼트는 1탭 들여 쓰고, 1탭의 크기는 공백 4칸으로 설정한다.
- 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다.
- 빈 줄의 간격은 1줄을 초과하지 않으며, 빈 줄을 사용하는 것은 선택 사항이다.
- 개발 적용과 관련된 주석은 해당되는 영역 위에 표기한다.

## DTD 선언, 인코딩, Viewport

- HTML 문서는 반드시 DTD를 선언하며, 신규 HTML 문서 작성시 'HTML5'을 사용한다.
- 신규 HTML 문서를 작성할 때 기본 인코딩은 utf-8을 원칙으로 한다.
- 브라우저에서 최신 렌더링 모드로 동작하도록 meta 엘리먼트를 사용하여 어떤 렌더링 엔진을 사용할지 설정한다.
- 모바일 브라우저에 대응하는 HTML 문서의 head 엘리먼트 안에 반드시 뷰포트를 설정한다.

~~~
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<title>삼성웰스토리</title>
</head>
~~~