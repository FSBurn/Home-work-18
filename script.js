const astrologicalSigns = {
    Aries: {
        startDate: {
            month: `March`,
            day: 21
        },
        endDate: {
            month: `April`,
            day: 20
        }
    },
    Taurus: {
        startDate: {
            month: `April`,
            day: 21
        },
        endDate: {
            month: `May`,
            day: 21
        }
    },
    Gemini: {
        startDate: {
            month: `May`,
            day: 22
        },
        endDate: {
            month: `June`,
            day: 21
        }
    },
    Cancer: {
        startDate: {
            month: `June`,
            day: 22
        },
        endDate: {
            month: `July`,
            day: 22
        }
    },
    Leo: {
        startDate: {
            month: `July`,
            day: 23
        },
        endDate: {
            month: `August`,
            day: 21
        }
    },
    Virgo: {
        startDate: {
            month: `August`,
            day: 22
        },
        endDate: {
            month: `September`,
            day: 23
        }
    },
    Libra: {
        startDate: {
            month: `September`,
            day: 24
        },
        endDate: {
            month: `October`,
            day: 23
        }
    },
    Scorpio: {
        startDate: {
            month: `October`,
            day: 24
        },
        endDate: {
            month: `November`,
            day: 22
        }
    },
    Sagittarius: {
        startDate: {
            month: `November`,
            day: 23
        },
        endDate: {
            month: `December`,
            day: 22
        }
    },
    Capricorn: {
        startDate: {
            month: `December`,
            day: 23
        },
        endDate: {
            month: `January`,
            day: 20
        }
    },
    Aquarius: {
        startDate: {
            month: `January`,
            day: 21
        },
        endDate: {
            month: `February`,
            day: 19
        }
    },
    Pisces: {
        startDate: {
            month: `February`,
            day: 20
        },
        endDate: {
            month: `March`,
            day: 20
        }
    }
}

const users = [
    {
        name: 'Larry Page',
        dayOfBirth: 26,
        monthOfBirth: `March`
    },
    {
        name: 'Bill Gates',
        dayOfBirth: 28,
        monthOfBirth: `October`
    },
    {
        name: 'Mark Zuckerberg',
        dayOfBirth: 14,
        monthOfBirth: `May`
    }
]
class Time {
    static get date(){
        return new Date();
    }
     static get day(){
       return this.date.getUTCDate();
    }
    static get month(){
        return this.date.getMonth();
    }
    static get monthNames(){
        return [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    }
    static monthName(value){
        return this.monthNames[value] ? this.monthNames[value] : "November"
    }
}
class Astrological extends Time{
    static astrologicalSign(day="9" ,month="December") {
        for(let key in astrologicalSigns){
            let myZod = key
            let myZodObj = astrologicalSigns[key]
            for(let k2 in myZodObj) {
                if(k2 === "startDate"){
                    if(myZodObj[k2].month === `${month}` && myZodObj[k2].day <= `${day}`){
                        return myZod
                    }
                }
                else if(k2 === "endDate"){
                    if(myZodObj[k2].month === `${month}` && myZodObj[k2].day >= `${day}`)
                        return myZod
                }
            }
        }
    }
}
class Human extends Astrological{
    constructor(user) {
        super();
        this.name = user.name
        this.dayOfBirth = user.dayOfBirth
        this.monthOfBirth = user.monthOfBirth
    }
       astrologicalSign(){
         return `${this.name} is ${Astrological.astrologicalSign(this.dayOfBirth,this.monthOfBirth)}`
    }
}

let LarryPage = new Human(users[0])
let BillGates = new Human(users[1])
let MarkZuckerberg = new Human(users[2])

console.log(LarryPage.astrologicalSign())
console.log(BillGates.astrologicalSign())
console.log(MarkZuckerberg.astrologicalSign())

// users
//     .forEach((user)=> {
//         const human = new Human(user)
//        console.log(human.astrologicalSign())
//     })

console.log(Time.date)
console.log(Time.day)
console.log(Time.month)
console.log(Time.monthNames)
console.log(Time.monthName(3))
console.log(Human.astrologicalSign())
console.log(Astrological.astrologicalSign(15,"January"))


//  Я просто оставлю это здесь....  :-)
//
// function vololodya(day,  month) {
// let searchDay = (new Date(Date.parse(month+", 2012")).getMonth()+1)*100 + day;
// let gest;
//     for (let lvl1 in astrologicalSigns) {
//     let sM = astrologicalSigns[lvl1]['startDate']['month'];
//     let eM = astrologicalSigns[lvl1]['endDate']['month'];
//      let sD= (new Date(Date.parse(sM+" 1, 2012")).getMonth()+1)*100 + astrologicalSigns[lvl1]['startDate']['day'] ;
//      let eD= (new Date(Date.parse(eM+" 1, 2012")).getMonth()+1)*100 + astrologicalSigns[lvl1]['endDate']['day'] ;
//      console.log(sD+' '+eD);
//      if(searchDay>sD && searchDay<eD) {  gest = lvl1; break; console.log(searchDay+' '+sD+' '+gest);}
// }
//     alert(gest);
// }
// vololodya(1,'November');

