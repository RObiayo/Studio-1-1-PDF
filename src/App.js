import { PDFViewer } from "@react-pdf/renderer";
    import Invoice from "./Invoice";

    function App() {
      return (
        <div>
          <PDFViewer width="1000" height="650" className="app" >
            <Invoice />
          </PDFViewer>
        </div>
      );
    }

    export default App;

const reciept_data = {
  "id": "642be0b4bbe5d71a5341dfb1",
  "invoice_no": "20200669",
  "address": "739 Porter Avenue, Cade, Missouri, 1134",
  "date": "24-09-2019",
  "items": [
    {
      "id": 1,
      "desc": "do ex anim quis velit excepteur non",
      "qty": 8,
      "price": 179.25
    },
    {
      "id": 2,
      "desc": "incididunt cillum fugiat aliqua Lorem sit Lorem",
      "qty": 9,
      "price": 107.78
    },
    {
      "id": 3,
      "desc": "quis Lorem ad laboris proident aliqua laborum",
      "qty": 4,
      "price": 181.62
    },
    {
      "id": 4,
      "desc": "exercitation non do eu ea ullamco cillum",
      "qty": 4,
      "price": 604.55
    },
    {
      "id": 5,
      "desc": "ea nisi non excepteur irure Lorem voluptate",
      "qty": 6,
      "price": 687.08
    }
  ]
}

//*Invoice Style*//
const styles = StyleSheet.create({
  page: {fontSize: 11,paddingTop: 20,paddingLeft: 40,paddingRight: 40,lineHeight: 1.5,flexDirection: 'column' },

  spaceBetween : {flex : 1,flexDirection: 'row',alignItems:'center',justifyContent:'space-between',color: "#3E3E3E" },

  titleContainer: {flexDirection: 'row',marginTop: 24},
  
  logo: { width: 90 },

  reportTitle: {  fontSize: 16,  textAlign: 'center' },

  addressTitle : {fontSize: 11,fontStyle: 'bold'}, 
  
  invoice : {fontWeight: 'bold',fontSize: 20},
  
  invoiceNumber : {fontSize: 11,fontWeight: 'bold'}, 
  
  address : { fontWeight: 400, fontSize: 10},
  
  theader : {marginTop : 20,fontSize : 10,fontStyle: 'bold',paddingTop: 4 ,paddingLeft: 7 ,flex:1,height:20,backgroundColor : '#DEDEDE',borderColor : 'whitesmoke',borderRightWidth:1,borderBottomWidth:1},

  theader2 : { flex:2, borderRightWidth:0, borderBottomWidth:1},

  tbody:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1, borderColor : 'whitesmoke', borderRightWidth:1, borderBottomWidth:1},

  total:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1.5, borderColor : 'whitesmoke', borderBottomWidth:1},

  tbody2:{ flex:2, borderRightWidth:1, }
  
});
