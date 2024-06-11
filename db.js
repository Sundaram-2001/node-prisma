const { PrismaClient, Prisma } = require("@prisma/client");
// const { Response } = require("express/Response");
const prisma = new PrismaClient();

//Retrieving all the records
const getAll = async (req, res) => {
  try {
    const items = await prisma.info.findMany();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.json({
      "Status Code": 500,
      "More Information": "Internal Server Error!",
    });
  }
};

//Adding a new record
const addData = async (req, res) => {
  const i1 = parseInt(req.body.id);
  try {
    // const { id: i, name: n, color: c, fuel_type: f } = req.body;
    const i = parseInt(req.body.id);
    const n = req.body.name;
    const c = req.body.color;
    const f = req.body.fuel_type;
    // console.log(i, n, c, f);
    const data = await prisma.info.create({
      data: {
        id: i,
        name: n,
        color: c,
        fuel_type: f,
      },
    });
    console.log(data);
    res.send(data);
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code == "P2002"
    ) {
      res.json({
        "Status Code": "P2002",
        "More Information": `A record with the id ${i1} already exists!`,
      });
    } else {
      res.json({
        "Status Code": "500",
        "More Information": "Internal Server Error!",
      });
    }
  }
};

//Updating a record
const updateData = async (req, res) => {
  const i = parseInt(req.body.id);
  try {
    await prisma.info.update({
      where: {
        id: i,
      },
      data: {
        name: "Porsche 992 GT3",
      },
    });
    res.json({
      "Status Code": "201",
      "More Information": "Record successfully updated!",
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      res.json({
        "Status Code": "404",
        "More Information": `No record with id ${i} found!`,
      });
    } else {
      res.json({
        "Status Code": "500",
        "More Information": "Internal Server Error!!",
      });
    }
  }
};

//deleting a record
const deleteData = async (req, res) => {
  // const i = parseInt(req.body.id);
  // console.log(i);
  try {
    const i = parseInt(req.body.id);
    await prisma.info.delete({
      where: {
        id: i,
      },
    });
    res.json({
      "Status Code": "200",
      "More Information": "Deleted Successfully!",
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(e);
      res.json({
        "Status Code": "500",
        "More Information": "Internal Server Error!!",
      });
    } else {
      res.json({
        "Status Code": "404",
        "More Information": `No record with id  found!!`,
      });
    }
  }
};
module.exports = {
  getAll,
  addData,
  updateData,
  deleteData,
};
