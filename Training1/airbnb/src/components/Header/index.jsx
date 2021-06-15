import React from "react";
import Input from "./Input";
import Greeting from "./Greeting";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div style={{ marginRight: "500px" }}>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE4Ny40OTYgMTg3LjQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg3LjQ5NiAxODcuNDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNOTMuNzQ4LDBDNDIuMDU2LDAsMCw0Mi4wNTUsMCw5My43NDhzNDIuMDU2LDkzLjc0OCw5My43NDgsOTMuNzQ4czkzLjc0OC00Mi4wNTUsOTMuNzQ4LTkzLjc0OFMxNDUuNDQsMCw5My43NDgsMHoNCgkJIE05My43NDgsMTczLjQ5NkM0OS43NzQsMTczLjQ5NiwxNCwxMzcuNzIxLDE0LDkzLjc0OFM0OS43NzQsMTQsOTMuNzQ4LDE0czc5Ljc0OCwzNS43NzUsNzkuNzQ4LDc5Ljc0OA0KCQlTMTM3LjcyMiwxNzMuNDk2LDkzLjc0OCwxNzMuNDk2eiIvPg0KCTxwYXRoIGQ9Ik05OS44MTEsNTguMzdjLTEuMjUxLTIuMTY2LTMuNTYyLTMuNS02LjA2My0zLjVzLTQuODEyLDEuMzM0LTYuMDYzLDMuNWwtMzQuNSw1OS43NTYNCgkJYy0xLjkzMywzLjM0OC0wLjc4NSw3LjYyOSwyLjU2Myw5LjU2MmMzLjM0OSwxLjkzNSw3LjYzLDAuNzg3LDkuNTYzLTIuNTYybDExLjI1OC0xOS41aDM0LjM1OGwxMS4yNTgsMTkuNQ0KCQljMS4yOTcsMi4yNDYsMy42NDksMy41MDEsNi4wNjksMy41MDFjMS4xODgsMCwyLjM5MS0wLjMwMiwzLjQ5My0wLjkzOWMzLjM0OC0xLjkzMyw0LjQ5NS02LjIxNCwyLjU2My05LjU2Mkw5OS44MTEsNTguMzd6DQoJCSBNODQuNjUyLDkxLjYyNmw5LjA5Ni0xNS43NTZsOS4wOTYsMTUuNzU2SDg0LjY1MnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            alt="logo"
          />
        </div>
        <div>
          <p style={{ margin: "20px 20px 0 20px" }}>Nơi ở</p>
          <p style={{ margin: "20px 20px 0 20px" }}>Trải nghiệm</p>
          <p style={{ margin: "20px 200px 0 20px" }}>Trải nghiệm trực tuyến</p>
        </div>
        <div>
          <p style={{ margin: "20px 20px 0 20px" }}>Trở thành chủ</p>
          <img
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4MHB0IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjQ4MHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNDAgMGMtMTMyLjU0Njg3NSAwLTI0MCAxMDcuNDUzMTI1LTI0MCAyNDBzMTA3LjQ1MzEyNSAyNDAgMjQwIDI0MCAyNDAtMTA3LjQ1MzEyNSAyNDAtMjQwYy0uMTQ4NDM4LTEzMi40ODQzNzUtMTA3LjUxNTYyNS0yMzkuODUxNTYyLTI0MC0yNDB6bTIwNy41NjY0MDYgMzI0LjA3ODEyNS02OC4yNTM5MDYgMTEuNzc3MzQ0YzcuODEyNS0yOC42NTIzNDQgMTIuMDMxMjUtNTguMTY0MDYzIDEyLjU1ODU5NC04Ny44NTU0NjloNzEuOTI5Njg3Yy0uOTAyMzQzIDI2LjExNzE4OC02LjM5ODQzNyA1MS44NzEwOTQtMTYuMjM0Mzc1IDc2LjA3ODEyNXptLTQzMS4zNjcxODctNzYuMDc4MTI1aDcxLjkyOTY4N2MuNTI3MzQ0IDI5LjY5MTQwNiA0Ljc0NjA5NCA1OS4yMDMxMjUgMTIuNTU4NTk0IDg3Ljg1NTQ2OWwtNjguMjUzOTA2LTExLjc3NzM0NGMtOS44MzU5MzgtMjQuMjA3MDMxLTE1LjMzMjAzMi00OS45NjA5MzctMTYuMjM0Mzc1LTc2LjA3ODEyNXptMTYuMjM0Mzc1LTkyLjA3ODEyNSA2OC4yNTM5MDYtMTEuNzc3MzQ0Yy03LjgxMjUgMjguNjUyMzQ0LTEyLjAzMTI1IDU4LjE2NDA2My0xMi41NTg1OTQgODcuODU1NDY5aC03MS45Mjk2ODdjLjkwMjM0My0yNi4xMTcxODggNi4zOTg0MzctNTEuODcxMDk0IDE2LjIzNDM3NS03Ni4wNzgxMjV6bTIxNS41NjY0MDYtMjcuNDcyNjU2YzI4Ljc0NjA5NC4zNjcxODcgNTcuNDIxODc1IDIuOTg0Mzc1IDg1Ljc2MTcxOSA3LjgzMjAzMWwyOC4yMzgyODEgNC44NzEwOTRjOC42NzU3ODEgMjkuNTIzNDM3IDEzLjM0Mzc1IDYwLjA3ODEyNSAxMy44Nzg5MDYgOTAuODQ3NjU2aC0xMjcuODc4OTA2em04OC40ODgyODEtNy45Mzc1Yy0yOS4yMzgyODEtNC45OTYwOTQtNTguODI4MTI1LTcuNjk1MzEzLTg4LjQ4ODI4MS04LjA2MjV2LTk2YzQ1Ljg2MzI4MSA0LjQwNjI1IDg1LjcwMzEyNSA0Ni4zOTg0MzcgMTA4LjI4MTI1IDEwNy41MTE3MTl6bS0xMDQuNDg4MjgxLTguMDYyNWMtMjkuNjYwMTU2LjM2NzE4Ny01OS4yNDIxODggMy4wNjY0MDYtODguNDgwNDY5IDguMDYyNWwtMTkuODAwNzgxIDMuNDI1NzgxYzIyLjU3ODEyNS02MS4xMjg5MDYgNjIuNDE3OTY5LTEwMy4xMzY3MTkgMTA4LjI4MTI1LTEwNy41MjM0Mzh6bS04NS43NTM5MDYgMjMuODMyMDMxYzI4LjMzNTkzNy00Ljg0NzY1NiA1Ny4wMDc4MTItNy40NjQ4NDQgODUuNzUzOTA2LTcuODMyMDMxdjEwMy41NTA3ODFoLTEyNy44Nzg5MDZjLjUzNTE1Ni0zMC43Njk1MzEgNS4yMDMxMjUtNjEuMzI0MjE5IDEzLjg3ODkwNi05MC44NDc2NTZ6bS00Mi4xMjUgMTExLjcxODc1aDEyNy44Nzg5MDZ2MTAzLjU1MDc4MWMtMjguNzQ2MDk0LS4zNjcxODctNTcuNDIxODc1LTIuOTg0Mzc1LTg1Ljc2MTcxOS03LjgzMjAzMWwtMjguMjM4MjgxLTQuODcxMDk0Yy04LjY3NTc4MS0yOS41MjM0MzctMTMuMzQzNzUtNjAuMDc4MTI1LTEzLjg3ODkwNi05MC44NDc2NTZ6bTM5LjM5MDYyNSAxMTEuNDg4MjgxYzI5LjIzODI4MSA1LjAwMzkwNyA1OC44MjQyMTkgNy43MTQ4NDQgODguNDg4MjgxIDguMTA1NDY5djk2Yy00NS44NjMyODEtNC40MTAxNTYtODUuNzAzMTI1LTQ2LjQwMjM0NC0xMDguMjgxMjUtMTA3LjUxNTYyNXptMTA0LjQ4ODI4MSA4LjEwNTQ2OWMyOS42NjAxNTYtLjM5MDYyNSA1OS4yNDIxODgtMy4xMDE1NjIgODguNDgwNDY5LTguMTA1NDY5bDE5LjgwMDc4MS0zLjQyNTc4MWMtMjIuNTc4MTI1IDYxLjEyODkwNi02Mi40MTc5NjkgMTAzLjEzNjcxOS0xMDguMjgxMjUgMTA3LjUyMzQzOHptODUuNzUzOTA2LTIzLjg3NWMtMjguMzM1OTM3IDQuODQ3NjU2LTU3LjAwNzgxMiA3LjQ2NDg0NC04NS43NTM5MDYgNy44MzIwMzF2LTEwMy41NTA3ODFoMTI3Ljg3ODkwNmMtLjUzNTE1NiAzMC43Njk1MzEtNS4yMDMxMjUgNjEuMzI0MjE5LTEzLjg3ODkwNiA5MC44NDc2NTZ6bTU4LjExNzE4OC0xMTEuNzE4NzVjLS41MjczNDQtMjkuNjkxNDA2LTQuNzQ2MDk0LTU5LjIwMzEyNS0xMi41NTg1OTQtODcuODU1NDY5bDY4LjI1MzkwNiAxMS43NzczNDRjOS44MzU5MzggMjQuMjA3MDMxIDE1LjMzMjAzMiA0OS45NjA5MzcgMTYuMjM0Mzc1IDc2LjA3ODEyNXptNDcuNjAxNTYyLTkzLjcxMDkzOC02NS40MjU3ODEtMTEuMjg5MDYyYy0xMS43NjE3MTktMzguMzcxMDk0LTMzLjc2NTYyNS03Mi44MDg1OTQtNjMuNjQ4NDM3LTk5LjYwMTU2MiA1NS44Nzg5MDYgMTguNjQ4NDM3IDEwMi4yMTg3NSA1OC40NTcwMzEgMTI5LjA3NDIxOCAxMTAuODkwNjI0em0tMjY5Ljg3MTA5NC0xMTAuODkwNjI0Yy0yOS44ODI4MTIgMjYuNzkyOTY4LTUxLjg4NjcxOCA2MS4yMzA0NjgtNjMuNjQ4NDM3IDk5LjYwMTU2MmwtNjUuNDI1NzgxIDExLjI4OTA2MmMyNi44NTU0NjgtNTIuNDMzNTkzIDczLjE5NTMxMi05Mi4yNDIxODcgMTI5LjA3NDIxOC0xMTAuODkwNjI0em0tMTI5LjA3NDIxOCAzMTQuMzEyNSA2NS40MjU3ODEgMTEuMjg5MDYyYzExLjc2MTcxOSAzOC4zNzEwOTQgMzMuNzY1NjI1IDcyLjgwODU5NCA2My42NDg0MzcgOTkuNjAxNTYyLTU1Ljg3ODkwNi0xOC42NDg0MzctMTAyLjIxODc1LTU4LjQ1NzAzMS0xMjkuMDc0MjE4LTExMC44OTA2MjR6bTI2OS44NzEwOTQgMTEwLjg5MDYyNGMyOS44ODI4MTItMjYuNzkyOTY4IDUxLjg4NjcxOC02MS4yMzA0NjggNjMuNjQ4NDM3LTk5LjYwMTU2Mmw2NS40MjU3ODEtMTEuMjg5MDYyYy0yNi44NTU0NjggNTIuNDMzNTkzLTczLjE5NTMxMiA5Mi4yNDIxODctMTI5LjA3NDIxOCAxMTAuODkwNjI0em0wIDAiLz48L3N2Zz4="
            style={{
              width: "20px",
              height: "20px",
              margin: "20px 20px 0 20px",
            }}
            alt="language"
          />
          <p style={{ margin: "20px 20px 0 10px" }}>user</p>
        </div>
      </div>
      <div style={{ display: "flex", margin: "50px 300px" }}>
        <Input label="Địa điểm" text="Bạn sắp đi đâu" />
        <Input label="Nhận phòng" text="Chọn ngày" />
        <Input label="Trả phòng" text="Chọn ngày" />
        <Input label="Khách" text="Khách" />

        <button>Tìm Kiếm</button>
      </div>
      <Greeting />
    </div>
  );
};

export default Header;
