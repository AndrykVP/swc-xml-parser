const parse = require('xml-js')

export default {
   state: {
      file: null,
      filter: false,
      perPage: 15,
      records: []
   },
   getters: {
      filteredRecords:state => {
         return state.records.filter(entry => entry.iffStatus != "Friend")
      },
      allRecords: state => {
         return state.records
      }
   },
   mutations: {
      clearFile(state) {
         state.file = null
         state.records = []
      },
      iffChange(state) {
         state.filter = !state.filter
      },
      pagination(state, value) {
         state.perPage = value
      },
      setFile(state, xml) {
         state.file = xml.file
         state.records = xml.records
      }
   },
   actions: {
      fileUpload(context, file) {
         var content = parse.xml2json(file, {compact: true, spaces: 2, ignoreDeclaration: true, ignoreComment: true,ignoreInstruction: true, ignoreAttributes: true})
         let temp = JSON.parse(content)
         let keys = Object.entries(temp.rss.channel)
         let title, date, hrs, mins
         let list = []

         for(const key of keys) {
            if(key[0] == "title") {
               title = Object.values(key[1]).toString().replace('Star Wars Combine - Scan of ','')
            }
            else if(key[0] == "date") {
               date = Object.values(key[1]).toString()
            }
            else if(key[0] == "cgt") {
               let time = Object.values(key[1])
               hrs = parseInt(Object.values(time[2]).toString())
               mins = parseInt(Object.values(time[3]).toString())

               if (hrs < 10) {hrs = "0" + hrs}
               if (mins < 10) {mins = "0" + mins}
            }
            else if(key[0] == "item") {
               let ships = Object.values(key[1])
               
               for(const ship of ships) {
               let entry = Object.entries(ship)
               let record = {}

               for(const attr of entry) {
                  record[attr[0]] = Object.values(attr[1]).toString()
               }

               list.push(record)
               }
            }
         }
        
         let result = {
            records: list,
            file: {
               title: title,
               date: date,
               time: {
                  hrs: hrs,
                  mins: mins
               }
            }
         }
         context.commit('setFile', result)
      }
   }
}