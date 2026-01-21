import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheck = (req, res, next) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { messgae: "Server is running" }));
//   } catch (error) {
//     next(error);
//   }
// };
const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { messgae: "Server is running" }));
});
export { healthCheck };
