router.get('/',(req,res) => {
    try {
  
  
      fs.unlink(path.join(__dirname,'../images/startup-g3174bf914_1920.jpg'), (err => {
        if (err) console.log(err);
        else {
          console.log("Deleted file: example_file.txt");
        }
      }));
  
  
  } catch (error) {
      console.log(error)
  }
  })