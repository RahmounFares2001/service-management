// import multer from 'multer';


// // multer storage
// const storage = multer.diskStorage({
//     destination: function(request, file, cb) {
//       cb(null, 'public/uploads');
//     },
//     filename: (request, file, cb) => {
//       const uniqueSuffix = Date.now();
//       cb(null, uniqueSuffix.toISOString() + file.originalname);
//     },
//   });
  
// const upload = multer({ storage });
// export default upload;