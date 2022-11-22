// import { data } from "../../data";
// export default function handler({ query: { id } }, res) {
//   console.log(id);
//   const filtered = data?.filter((comment) => comment.id === id);
//   console.log(filtered);

//   if (filtered.length > 0) {
//     res.status(200).json(filtered[0]);
//   } else {
//     res
//       .status(404)
//       .json({ message: `Comment with the id of ${id} is not found` });
//   }
// }
