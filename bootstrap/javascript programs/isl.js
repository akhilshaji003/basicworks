isl=[
    {name:"mumbaicity",mp:7,win:5,drawn:1,lost:1,gf:11,gd:8},
    {name:"atk",mp:6,win:4,drawn:1,lost:1,gf:7,gd:3},
    {name:"bengaluru",mp:6,win:3,drawn:3,lost:0,gf:11,gd:7},
]

//print all team names
isl.array.forEach(data=>console.log(data.name))
//print team names in uppercase
isl.map(team=>team.name.toUpperCase()).foreach((name)=>console.log(name))


//team with win>3
isl.filter(team=>team.win>3).foreach((name)=>console.log(team.name))
    


