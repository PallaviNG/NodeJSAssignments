const fs=require("fs");
// console.log(fs);

//Writing to file.. if file doesn't exist writeFile creates File
fs.writeFile("main.data","Hello THis is String ",function(error){
    if(error)
        throw error;
    else
        console.log("File is created and written data successfully...");
});

//Reading from file
// fs.readFile("main.data",function(error,data){
//     if(error)
//         throw error;
//     else
//         console.log("File Contents :" + data);
// });

//Append to file
// fs.appendFile("main.data","...appended text",function(error){
//     if(error)
//         throw error;
//     else
//         console.log("Data is appended!!");
// });


//Delete file
// fs.unlink("main.data",function(error){
//     if(error)
//         throw error;
//     else
//         console.log("File is removed successfully...")
// });