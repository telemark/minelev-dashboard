import { Component } from 'react'
import Link from 'next/link'

export default class Navbar extends Component {
  render () {
    return (
      <nav>
        <ul className={'left'}>
          <li>
            <a href='/'>
              <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNjggODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+PGcgaWQ9Iklzb2xhdGlvbiBNb2RlIj48Zz48Y2xpcFBhdGggaWQ9Il9jbGlwMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY4LjAwNCIgaGVpZ2h0PSI4MCIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwMSkiPjxwYXRoIGQ9Ik0wLDBjMCwwIDAuMDUzLDI3LjUyMSA1LjQsNDQuMTYyYzQuODQ4LDE1LjA4OSAxNS43MjgsMjcuNjk2IDI4Ljc2NiwzNS44MzhjMTMuMDM5LC04LjE0MiAyMy41OSwtMjAuNzQ5IDI4LjQzOSwtMzUuODM4YzUuMzQ2LC0xNi42NDEgNS4zOTksLTQ0LjE2MiA1LjM5OSwtNDQuMTYybC02OC4wMDQsMFoiIHN0eWxlPSJmaWxsOiMyMzFmMjA7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTM0LjE2Nyw3OC42NjhjLTEzLjIwMSwtOC40MjkgLTIzLjI3NSwtMjEuMDk2IC0yNy42OTUsLTM0Ljg0OWMtNC42MjYsLTE0LjM5NSAtNS4yNTEsLTM3LjM2NiAtNS4zMzQsLTQyLjY5NGw2NS43MjksMGMtMC4wODMsNS4zMjkgLTAuNzA5LDI4LjMwMyAtNS4zMzMsNDIuNjk0Yy00LjUzNywxNC4xMTggLTE0LjI0MSwyNi40NjkgLTI3LjM2NywzNC44NDkiIHN0eWxlPSJmaWxsOiNmZmQ1MWY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTEyLjI0MywzOS43NzNjMC4xMTIsLTAuMTEzIDAuNjEzLC0wLjYyNSAxLjA3NCwtMC45OTVjMi44MSwtMi4yNTggNy43ODQsLTYuODA0IDEzLjU1MywtNi4yMDhjNS4zMjQsMC41NTEgNy40MSw0LjU2NSA3LjQxLDQuNTY1Yy0yLjM1NCwyLjUzNiAtMy45MDgsNi4zNzcgLTQuMDI1LDkuNDg2Yy0wLjExNywzLjExIDAuODQ5LDIyLjIyMiAwLjg0OSwyMi4yMjJjMCwwIDAuMTQ4LDUuMDU2IDAuMjY4LDguMDA3YzAuOTE3LDAuNjUgMS44NDUsMS4yODMgMi43OTUsMS44OTFjMC43NzUsLTAuNDk2IDEuNTM3LC0xLjAwOCAyLjI4OCwtMS41M2wwLjQ0OSwtMjEuMjQzYzAuMjM3LC0zLjUyOSAtMC4zNzMsLTguMjQgMi41MTEsLTExLjE3NmMwLjE5MywtMC4xOTcgMS4wNzIsLTAuOTQyIDEuMDcyLC0wLjk0MmMwLDAgMC44ODIsMC43NSAxLjE0OSwwLjkyNGMwLjEzMywwLjA4NSAwLjMwNiwwLjA3IDAuNDI1LC0wLjAzM2w2LjczLC01Ljc5M2MwLjExNywtMC4xMDIgMC4xODYsLTAuMjY2IDAuMTI2LC0wLjQwOWMtMC4yMTksLTAuNTE3IC0wLjYwNywtMS4yMzEgLTAuNjA3LC0xLjIzMWMwLDAgNS40MjIsLTUuMzM1IDguODMsLTcuNzA5YzAuMzMyLC0wLjIzIDAuMTE0LC0wLjY3MyAtMC4yOTEsLTAuNDk5Yy0xLjY2LDAuNzEgLTMuNTA5LDAuNDU3IC00LjUxMiwtMC41NDVjLTAuNDMyLC0wLjQzMyAtMC42MzIsLTEuMDgyIC0xLjE2MywtMC43MjdjLTMuOTY2LDIuNjQxIC03LjIzMiwzLjY1OCAtNy4yMzIsMy42NThjLTEuMjA3LC0xLjAyNiAtMS45NTQsLTIuMDc5IC0yLjY0NywtMy4zMDVjLTMuMjYyLC02LjY1MyAtMS42MzEsLTE1LjMxIDMuMDc1LC0yMC43NjZjMS40NDEsLTEuNjk0IDIuODc2LC0yLjgxNCA0LjYyNiwtMy44MzNjMC4yMSwtMC4xMjIgMC4yNDIsLTAuNTA5IC0wLjIwOCwtMC40ODNjLTE0Ljc4NiwwLjg1NiAtMjcuOTI5LDEwLjYxNSAtMzMuNzc2LDI0LjEzOWMtMS42OTIsMy45MTYgLTMuMDE2LDguMzU4IC0zLjIsMTIuMTQ0Yy0wLjAyMSwwLjQxOCAwLjA5LDAuNzMyIDAuNDMxLDAuMzkxIiBzdHlsZT0iZmlsbDojMjMxZjIwO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik00OS41NDksMzAuOTA2YzAuNTE1LC0wLjA5MSAxLjExMywtMC4wNjEgMS4zMDIsMC4xMzdjMC4zMSwwLjMyNiAtMC40MTUsMS4zNzcgLTAuODA1LDIuMDMzYy0wLjkyNywxLjU2IC0xLjAwMiwxLjY4OSAtMS45MjYsMy4xMTVjMCwwIC0wLjA5MiwtMC42ODcgMC4wOTgsLTEuMzUzYzAuMjEyLC0wLjc0NCAwLjYxNSwtMS40MzIgMC45MDUsLTEuODczYzAuMzU2LC0wLjU0MiAwLjcyOCwtMC45MTQgMC42NjgsLTEuMTYxYy0wLjA2NSwtMC4yNjMgLTEuMDgyLDAuMDgxIC0xLjQ5MiwwLjEzNWMtMC40NjUsMC4wNjMgLTEuNjI1LDAuNDc5IC0yLjYyNiwtMC4xMDVjMCwwIDIuNzEsLTAuNzIgMy44NzYsLTAuOTI4IiBzdHlsZT0iZmlsbDojZmZkNTFmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0zNC4wMDMsNDQuMTg1YzAuMzk3LC0wLjE0NSAyLjI2MywtMS4zNCAzLjc4MSwtMS4xNzdjMS4wNzgsMC4xMTcgMS42NjcsMC41NDYgMS42NjcsMC41NDZjLTEuMDk0LDAuMDkgLTIuMDI2LC0wLjA2MiAtMy44MSwwLjgyOWMtMC44OTksMC40NSAtMi4wMzEsMS4zNTcgLTIuNjM1LDAuNzJjLTAuNDE5LC0wLjQ0MyAtMC40MDMsLTEuMzIxIDAuMDAzLC0zLjE5OGMwLjQ0OCwtMi4wNjIgMS4yOTMsLTMuMzY2IDEuMjkzLC0zLjM2NmMwLDAgMC4wNSwwLjc2NyAtMC42NTYsNC42NjhjLTAuMTIzLDAuNjc4IC0wLjEyLDEuMTUzIDAuMzU3LDAuOTc4IiBzdHlsZT0iZmlsbDojZmZkNTFmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0zMS44NzMsNjcuMTUyYzAsMCAtMC4xNjQsMS40MzYgMC45NjMsMi44MDZjMS4xMjgsMS4zNzEgMi43ODksMy4wNzUgMi43ODksMy4wNzVjMCwwIDAuMjg5LC0xLjE3MSAtMC44ODksLTIuNjAyYy0xLjE3NywtMS40MzIgLTIuODYzLC0zLjI3OSAtMi44NjMsLTMuMjc5IiBzdHlsZT0iZmlsbDojZmZkNTFmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0zMS40MzQsNTYuODU5YzAsMCAtMC4wOTQsMS40ODggMS4xMzgsMi44MzhjMS4yMzQsMS4zNTMgMy4xOTksMy4yMzIgMy4xOTksMy4yMzJjMCwwIDAuMjM3LC0xLjIyMSAtMS4wNTEsLTIuNjMzYy0xLjI4NywtMS40MTEgLTMuMjg2LC0zLjQzNyAtMy4yODYsLTMuNDM3IiBzdHlsZT0iZmlsbDojZmZkNTFmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjxwYXRoIGQ9Ik0zMS4yMzIsNDYuNTk0YzAsMCAtMC4yMDYsMS40MjYgMS4wNzIsMi45NjFjMS4yNzksMS41MzcgMy43NTEsNC40ODQgMy43NTEsNC40ODRjMCwwIDAuMjM5LC0xLjQ0NyAtMS4wOTUsLTMuMDUzYy0xLjMzNSwtMS42MDUgLTMuNzI4LC00LjM5MiAtMy43MjgsLTQuMzkyIiBzdHlsZT0iZmlsbDojZmZkNTFmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L2c+PC9nPjwvc3ZnPg==' />
            </a>
          </li>
          <li>{this.props.title}</li>
        </ul>
        <ul className={'right'}>
          <li><Link href='/' prefetch><a>Dashboard</a></Link></li>
          <li><Link href='/stats' prefetch><a>Statistikk</a></Link></li>
        </ul>
        <style jsx>{`
          img {
            width: 36px;
          }
          nav {
            display: flex;
            justify-content: space-between;
            background-color: #FFD520;
            margin-bottom: 20px;
            height: 60px;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            align-items: center;
          }
          ul.left {
            justify-content: flex-start;
          }
          ul.right {
            justify-content: flex-end;
          }
          li {
            font-size: large;
            margin: 10px;
            align-self: center;
          }
          a {
            text-transform: uppercase;
            text-decoration: none;
            color: black;
          }
          a:hover {
            color: #6AC4AE;
            text-decoration: underline;
          }
        `}
        </style>
      </nav>
    )
  }
}
