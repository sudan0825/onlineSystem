This an online transaction system is built on MEAN stack. The frontend website manipulation is controlled by Angularjs. When mouse hovers over different menue in navigation bar, differnt lists will be attached. When the mouse leave the navigation bar/suspending div, the attached div will disappear. 


1. When we try to find a file in the local machine with fs and fs reports something like "path is not exist", we need  to  use path resolve:

var testPath = path.resolve(path.join(__dirname, "/public/imgs", "homeimg.jpeg"))


response data{ _id: 5a1b105242e4653c135e2334,
  name: 'fist Image',
  discription: 'SAVE AND GET',
  image:
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 170809,
     buffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 03 02 02 03 02 02 03 03 03 03 04 03 03 04 05 08 05 05 04 04 05 0a 07 07 06 ... > },
  price: 23456,
  __v: 0 }