const testArr = [

  //Ansvar
  {
    Category: "Ansvar",
    Description: "XDLMAO!!",
    Questions: [
      //Spørgsmål 1
      {
        Type: "Multiple choice",
        Problem: ["Hvem har ansvaret for at bilen er i lovlig stand?"],
        Choices: ["Føreren af bilen", "Bilens ejer", "Alle, der kører i bilen"],
        Answer: ["Bilens ejer"],
        Explanation: ["Ejeren af bilen har ansvaret for, at bilen er i lovlig stand - dvs. forsikring osv."],
        Subcategory: "Ansvar for køretøjet"
      },

      //Spørgsmål 2
      {
        Type: "Multiple choice",
        Problem: ["Hvem har ansvaret for at bilen er i forsvarlig stand?"],
        Choices: ["Føreren af bilen", "Bilens ejer", "Alle, der kører i bilen"],
        Answer: ["Føreren af bilen"],
        Explanation: ["Føreren af bilen har ansvaret for, at bilen er i forsvarlig stand", "Dvs. at følgende er i orden:", 
        ["Styretøj", "Bremser", "Lygter og reflekser", "Horn, ruder og spejle", "Dæk og støddæmpere"]],
        Subcategory: "Ansvar for køretøjet"
      },

      {
        Type: "Multiple choice",
        Problem: ["Hvem har ansvaret for at bilen er forsikret?"],
        Choices: ["Føreren af bilen", "Bilens ejer", "Alle, der kører i bilen"],
        Answer: ["Bilens ejer"],
        Explanation: ["Ejeren af bilen har ansvaret for, at bilen er i lovlig stand - dvs. forsikring osv."],
        Subcategory: "Ansvar for køretøjet"
      },

      {
        Type: "Multiple choice",
        Problem: ["Hvem har ansvaret for at $var er i orden?"],
        Choices: ["Føreren af bilen", "Bilens ejer", "Alle, der kører i bilen"],
        Answer: ["Føreren af bilen"],
        Explanation: ["Føreren af bilen har ansvaret for, at bilen er i forsvarlig stand", "Dvs. at følgende er i orden:", 
        ["Styretøj", "Bremser", "Lygter og reflekser", "Horn, ruder og spejle", "Dæk og støddæmpere"]],
        Subcategory: "Ansvar for køretøjet",
        Variables: ["styretøj", "bremser", "lygter og reflekser", "horn, ruder og spejle", "dæk og støddæmpere"]
      }
    ]
  },

    //Styreapparat
    {
      Category: "Styreapparat",
      Description: "",
      Questions: [
        //Spørgsmål 1
        {
          Type: "Multiple choice",
          Problem: [""],
          Choices: ["", "", ""],
          Answer: [""],
          Explanation: "",
          Subcategory: ""
        }
      ]
    },

    //Bremser
    {
      Category: "Bremser",
      Description: "",
      Questions: [
        //Spørgsmål 1
        {
          Type: "Multiple choice",
          Problem: [""],
          Choices: ["", "", ""],
          Answer: [""],
          Explanation: "",
          Subcategory: ""
        }
      ]
    },

    //Lygter og reflekser
    {
      Category: "Lygter og reflekser",
      Description: "",
      Questions: [
        //Spørgsmål 1
        {
          Type: "Multiple choice",
          Problem: [""],
          Choices: ["", "", ""],
          Answer: [""],
          Explanation: "",
          Subcategory: ""
        }
      ]
    },
    
    //Ruder og spejle
    {
      Category: "Ruder og spejle",
      Description: "",
      Questions: [
        //Spørgsmål 1
        {
          Type: "Multiple choice",
          Problem: [""],
          Choices: ["", "", ""],
          Answer: [""],
          Explanation: "",
          Subcategory: ""
        }
      ]
    },

    //Motor og udstødning
    {
      Category: "Motor og udstødning",
      Description: "",
      Questions: [
        //Spørgsmål 1
        {
          Type: "Multiple choice",
          Problem: [""],
          Choices: ["", "", ""],
          Answer: [""],
          Explanation: "",
          Subcategory: ""
        }
      ]
    },

    //Nyttige oplysninger
    {
      Category: "Nyttige oplysninger",
      Description: "",
      Questions: [
        //Spørgsmål 1
        {
          Type: "Multiple choice",
          Problem: [""],
          Choices: ["", "", ""],
          Answer: [""],
          Explanation: "",
          Subcategory: ""
        }
      ]
    }
]

const catObj = {
  ansvar: {
    catTitle: "Ansvar",
    catSubTitle: ["Ansvar for køretøjet"],
    catSubInfo: [
      []
    ]
  },

  styreapparat: {
    catTitle: "Styreapparat",
    catSubTitle: ["Styreapparatet", "Horn"],
    catSubInfo: [
      [],
      []
    ]
  },

  bremser: {
    catTitle: "Bremser",
    catSubTitle: ["Driftsbremsen (fodbremsen)", "Nødbremsen", "Parkeringsbremsen (håndbremsen)", "Bremseforstærker", "Fejl i bremser"],
    catSubInfo: [
      [],
      [],
      [],
      [],
      []
    ]
  },

  lygterogreflekser: {
    catTitle: "Lygter og reflekser",
    catSubTitle: ["Lygter og reflekser"],
    catSubInfo: [
      [
        "Du har ansvaret for at lygter og reflekser er rene, og at lygterne virker.",
        "Et lygtepar skal lyse med samme farve og styrke.",
        ["2 nærlyslygter", "Hvid/gullig", "Oplyse 30 m", "Ikke blænde, skal falde 1% (1 cm på 1)", "Asymmetrisk (lyse mest til højre side)"],
        ["2 fjernlyslygter", "Hvid/gullig", "Oplyse 100 m"],
        ["2 positionslygter (parkeringslys)", "Hvid/gullig", "Skal kunne ses 300 m væk"],
        ["Bagpå skal der være:", "2 røde baglygter, skal kunne ses 300 m væk", "3 røde stoplygter, skal lyse væsentligt kraftigere end baglygterne", "Hvidt nummerpladelys, man skal kunne læse nummerpladen fra 20 m", "2 røde reflekser, må ikke være trekantede (anhængere har trekantede reflekser"],
        ["Blinklys", "2 foran, 2 på siden, 2 bagpå", "Gul/orange, kan tydeligt ses i solskin", "Blinke 1-2 gange i sekundet (60-120 gange i minuttet", "Havariblink-knappen aktiverer alle blinklys på én gang"],
        "Skolevognen har også tågelys og baklys. De er ikke obligatoriske, men hvis de er der, skal de virke."
      ]

    ]
  },

  ruderogspejle: {
    catTitle: "Ruder og spejle",
    catSubTitle: ["Ansvar for køretøjet"],
    catSubInfo: [[]]
  },

  motorogudstødning: {
    catTitle: "Motor og udstødning",
    catSubTitle: ["Ansvar for køretøjet"],
    catSubInfo: [[]]
  },

  nyttigeoplysninger: {
    catTitle: "Nyttige oplysninger (ikke prøvestof)",
    catSubTitle: ["Ansvar for køretøjet"],
    catSubInfo: [[]]
  }
}