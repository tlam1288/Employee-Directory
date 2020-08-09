import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=email,name,phone&results=";

// export default {
//   search: function () {
//     return axios.get({
//       url: BASEURL,
//       dataType: "json",
//       success: function (data) {
//         console.log(data + "It worked!");
//       },
//     });
//   },
// };

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
