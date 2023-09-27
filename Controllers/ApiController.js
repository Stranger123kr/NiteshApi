const DemoApi = require("../Model/ApiSchema");

const Api = async (req, res) => {
  const { title, brand, category, rating, sort, select, page, limit } =
    req.query;
  const queryApi = {};

  // ================================

  if (title) {
    queryApi.title = { $regex: title, $options: "is" };
  }
  if (brand) {
    queryApi.brand = { $regex: brand, $options: "is" };
  }
  if (category) {
    queryApi.category = { $regex: category, $options: "is" };
  }
  if (rating) {
    queryApi.rating = { $gt: rating };
  }

  // ================================

  let ApiResult = DemoApi.find(queryApi);

  if (sort) {
    let sortFix = sort.replace(/,/g, " ");
    ApiResult = ApiResult.sort(sortFix);
  }

  // ================================

  if (select) {
    let selectFix = select.replace(/,/g, " ");
    ApiResult = ApiResult.select(selectFix);
  }

  // ========================================

  if (page || limit) {
    let ProductPage = Number(page) || 1;
    let ProductLimit = Number(limit) || 5;

    // this is a skip formula
    let skip = (ProductPage - 1) * ProductLimit;

    ApiResult = ApiResult.skip(skip).limit(ProductLimit);
  }

  // ================================

  try {
    const Data = await ApiResult;
    Data.length === 0
      ? res.status(404).json("Result Not Found")
      : res.status(200).json({
          Products: Data,
          nbHits: Data.length,
        });
  } catch (error) {
    res.status(404).json(error);
  }
};

const ApiTesting = async (req, res) => {
  res.send("hello world");
};

module.exports = { Api, ApiTesting };
