module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v 2.0! You function executed succesfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
