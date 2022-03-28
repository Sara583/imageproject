import sharp from 'sharp';

const processImg=()=>{
    const resizedImg=sharp('assets/images/img2.jpg')
    .resize({ 
        height:200, 
        width: 200 
    })
    .png()
    .toFile('./edited/edited1.png')
    .then(function(newFileInfo) {
        console.log("Success");
    })
    .catch(function(err) {
        console.log("Error occured");
    });

}
  export default processImg;