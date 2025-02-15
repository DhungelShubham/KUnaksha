const mongoose = require("mongoose");
const {Location} = require('./location');

mongoose
  .connect("mongodb+srv://Jatin:1234qwer@cluster0.i3zyb.mongodb.net/co-ordinates?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));



  const sampleCategories = [
    {  
        name:'Multipurpose Hall', 
        lat:27.619391872948153,
        lon:85.53724899350867,
        alt:1442.6060064717171,
        
    },
    {  
        name:'Block 9', 
        lat:27.619924644794086,
        lon:85.53903875265267,
        alt:1451.801328700104,
        
    },
    {  
        name:'Library', 
        lat:27.618935137448055,
        lon:85.53859180782936,
        alt:1467.5981547800166,
       
    },
    {  
        name:'Block 8', 
        lat:27.619588178774414 ,
        lon:85.53940841457984 ,
        alt:1453.0893848424332,
        
    },
    {  
        name:'Block 7', 
        lat:27.619270853620513 ,
        lon:85.53954460345712 ,
        alt:1451.4229689271863,
        
    },
    {  
        name:'Block 6', 
        lat:27.6189731811361 ,
        lon:85.53927933680691 ,
        alt:1457.709326187914,
        
    },
    {  
        name:'Administrative', 
        lat:27.619582772625428 ,
        lon:85.53857171581157 ,
        alt:1463.922842208704,
        
    },
    {  
        name:'Lawn', 
        lat:27.619322089755887 ,
        lon:85.53858923850397 ,
        alt:1466.9051509894798,
       
    },
    {  
        name:'Canteen', 
        lat:27.61929934674078 ,
        lon:85.53888642698891 ,
        alt:1466.5387767709005,
        
    },
    {  
        name:'KU Cafe', 
        lat:27.61846121894616 ,
        lon:85.53833073177779 ,
        alt:1459.7594307608372,
        
    },
    {  
        name:'NTIC', 
        lat:27.61734661610735 ,
        lon:85.53530879965132 ,
        alt:1428.971358440048,
       
    },
    {  
        name:'WorkShop',
        lat:27.617668553357746 ,
        lon:85.53490191219434 ,
        alt:1418.8357838361221,
       
    },
    {  
        name:'Boys Hostel', 
        lat:27.617772679743478 ,
        lon:85.53669424902395 ,
        alt:1443.10014076079,
        
    },
    {  
        name:'Girls Hostel', 
        lat:27.618126378701316 ,
        lon:85.53925547189561 ,
        alt:1456.3038866560905,
        
    },
    {  
        name:'Bank', 
        lat:27.617455700373004 ,
        lon:85.53899247617747 ,
        alt:1463.4391185326765,
        
    },
    {  
        name:'Ground', 
        lat:27.61863276437187 ,
        lon:85.5369597379473 ,
        alt:1433.335048537352,
        
    },
    {  
        name:'Pharmcy Block', 
        lat:27.618949278816622 ,
        lon:85.53810321454411 ,
        alt:1461.3806099036087,
        
    },
    {  
        name:'Civil Enginerring', 
        lat:27.61927147761533 ,
        lon:85.53808290648848 ,
        alt:1461.4358570347702,
        
    },
    {  
        name:'Block 10', 
        lat:27.619721743317807 ,
        lon:85.53810083729793 ,
        alt:1459.061302458295,
        
    },
    {  
        name:'Foreign Students Hostel', 
        lat:27.6176920575628 ,
        lon:85.53939531682298 ,
        alt:1459.6210065497776,
        
    },
    {  
        name:'TTC', 
        lat:27.62010026775487 ,
        lon:85.53775806534156 ,
        alt:1459.6210065497776,
        
    },

];
  
  module.exports = sampleCategories;
  

  const seedDatabase = async () => {
    try {
      await Location.deleteMany({});
      await Location.insertMany(sampleCategories);
      console.log("Database seeded successfully!");
      mongoose.connection.close();
    } catch (err) {
      console.error("Error seeding database:", err);
    }
  };
  
  seedDatabase();

