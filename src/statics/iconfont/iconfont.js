import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1583255002986'); /* IE9 */
  src: url('./iconfont.eot?t=1583255002986#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWAAAsAAAAACuQAAAU0AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqIPIcPATYCJAMcCxAABCAFhG0HXRtcCVGULk6b7AtsG/akRBkNx4YZAE4AHDaCAgCwwAI+IBsALB7+3S+7L8mHEjokOaeyLFGVdVXVEvlVKAXaGr1oxFyu5T6wMTv+iVWJFPrAJpej3OT2HsbX6SpVIVvhOoRnXor/3+UNBC8g2Zx2IpvRSTsBYR4DB8dSP/0fLO8rQV4xK2aROhsl0LwiRIYlMIGB0AB4CrAzWIs6zifQa9pQ7fDu5R26CkMXZMu9swK6KbtSgw+tqS7Zt4iPKm16nx6AD/73x3/z6JJUmbHt2d2thotftj8z1aXcuk5fhvOCO4iMTaAQ70r9LzRC7aav7y1buekI6NdKylArbWydHu92SYmtqw1v6DfRg//gUcmKWkhEjdT309hLXX2ECptNxa91NplfG2wKv7bkqOGUtArS8JPsI4HG3WcQMyC2AeKBYez4gaLnGiPKR7V1Ta+pspBGKMf0IDKK9GioqiWOj6qo6KFlc/Sr5XJSocAVPM5zWOWsYo6i58OqamQK+YJzobMY/Q3yIuC5BmhkiTOx4RxUZc44YuuA7mK3qvVnJeddarYiBD5bD5KrCRQL9BDYNnm5+cRCBxzONaiqnmOc/IXmkLN0C9B5ugOazCEgog7boeC0glRbK0PE9JFCVcdDnC8CxVqtcP5hiYw+whzCwxv1yKUYNxrnH5JVLtWKW7kcQ8hpUiHBeWpgPu+iM7eiZ+NORC7vxRBIoiAEoe1hDU6GEhG0LOAkb7VMAxKqGGxA8/LnmMNFhrllB1EJABCBLGQuITRJ0pAJxXetA9R6VHIcQf4bs/MIIjVTfC0RS826qpkbY0pcCS1JnUR8LTWTIObt+xIJam49ewz67kUYP9KJJvWmzelpTWYNpj3zjOfdTbGgvnZ+HhD08TkIgXvPIeNQ8yKLUNh7yN1GoNLmMNFA2d/AwH4i7bT1df7YDaE3Az4aHdIe7XVLYxP+uuu8963RUpuqveZxJ/5b7uT/8abrgPNLh4mLPR9X7V/TDpk13rKPPReDQMFXZlbmlvbdWYq6MhwZHUaxVmaW5lamJQus8WQPow7WEkRoR0Iff2rCf8ZRBZCOq6vUsXCVdTr81WVQVFfo4BC7fWGdCPbUlRT8Li0oKPldUFoaIkr+gNLfwNsmyfZMlZtPrLd3rIc/IbVFYgoLrHPsplv5+FhNX7Eyd4le5AKZbMeWtNR3W7a8EzxcERkXJ6oDbHXCVcfYq1Xq/8sP5PXhGbggurwuXCH6vd3ReTLQAxFHubc4EXVqRWhKZPCTYrLzvJHeb2O7j3bmYBgAAOD/06NCG5/4cKnQgsizgm/EpiwTvCHuPCtMSv1nhV/09YC+8fTJJRqhX1XQ3/6UW2O33KJiwrtZgcvfo4Gi+ForwFFFVRmOpsgD23KQ3DjS+0BCr158ncOj/oYzTsB6/xzjRAxJYwqy1iKyYDeh0qcDtdYO9Npwf3CfMUFDlB6s+yIgDPuGZNBXyIb9IAv2FyqT/qE2HA3odR5jx+yzHK5/EEgwaZRndMrnxnJxP2h9JVulIiRVPuGTQulSOBtPs6V7yikMsUN5sHNmgyb4DO+Ii1GaeiyCj0nxOGIu9pOJKXujsfIZ9B0IiMCIhqQz5ChezriTs37u618Rq5ISQk2/iugnEpTc/NHM2BRA3utzqN+ldJcOrDmmsgYyXLOXQXeUl6Rm3kNF+VoxorCxqEO2sDehxjOofjy9MbvPc6CXca0mUuQoUUUdTbTax5GvlMht51XlShKruvYjOjg61juzwcmsWhJPZ4tN/VIAAA==') format('woff2'),
  url('./iconfont.woff?t=1583255002986') format('woff'),
  url('./iconfont.ttf?t=1583255002986') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1583255002986#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconshoucang:before {
  content: "\e64f";
}

.iconzuanshi:before {
  content: "\e6c3";
}

.iconreview:before {
  content: "\e62a";
}

.icon41:before {
  content: "\e62b";
}

.iconiconset0137:before {
  content: "\e624";
}

.iconAa:before {
  content: "\e636";
}
`;

