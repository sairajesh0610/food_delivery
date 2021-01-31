export const isNotEmpty = val => {
    return !!val;
};



export function processProdList(prdListArr,cartList,sellang){
 
      if (cartList.length == 0) {
        let prodList = prdListArr.map(it => {
          it.name = it['langpref'][sellang]['name'];
          it.descpt = it['langpref'][sellang]['descpt'];
          let selectedIndex = 0;
          let alreadySelected = false;
          it.showmore = it.proditems && it.proditems.length > 1 ? true : false;
          it.proditems = it.proditems.map((proditem, index) => {
            if (!alreadySelected) {
              selectedIndex =
                proditem.outofstock == 'true' ? selectedIndex + 1 : selectedIndex;
            }
            proditem.prdquan = 0;
            proditem.selected = index == selectedIndex ? true : false;
            if (proditem.selected && !alreadySelected) {
              alreadySelected = proditem.selected;
            }
  
            return proditem;
          });
          if (selectedIndex >= it.proditems.length) {
            it.showmask = true;
            it.proditems[0].selected = true;
          } else {
            it.showmask = false;
          }
          return it;
        });
        return prodList
        //this.setState({prdListArr: prodList});
      } else {
        let prodList = prdListArr.map(it => {
  
          it.name = it['langpref'][sellang]['name'];
          it.descpt = it['langpref'][sellang]['descpt'];
          it.showmore = it.proditems && it.proditems.length > 1 ? true : false;
          let a = cartList.filter(item => item.prdid == it.id);
        
          if (a.length > 0) {
            let b = it.proditems.filter(proditems=>proditems.selected)
            if(b.length > 0){
              for(let x=0;x<it.proditems.length;x++){
                for(let y=0;y<a.length;y++){
                  if(it.proditems[x]['itemid']== a[y]['prditid']){
                    it.proditems[x]['prdquan'] =  a[y]['prdquan'] ? a[y]['prdquan'] : 0;
                  }
                }
              }
  
              return it;
            }
  
            let alreadySelected = false;
  
            for(let x=0;x<it.proditems.length;x++){
              it.proditems[x]['selected'] = false;
              it.proditems[x]['prdquan'] = 0;
              for(let y=0;y<a.length;y++){
                if(it.proditems[x]['itemid']== a[y]['prditid']){
                  it.proditems[x]['selected'] = ((!alreadySelected)) ? true : false;
                  alreadySelected = it.proditems[x]['selected'] && (!alreadySelected)? true : false;
                  it.proditems[x]['prdquan'] =  a[y]['prdquan'];
                  break;
                }
              }
            }
            return it;
          }else {
            let selectedIndex = 0;
            let alreadySelected = false;
            it.showmore = it.proditems && it.proditems.length > 1 ? true : false;
            it.proditems = it.proditems.map((proditem, index) => {
              if (!alreadySelected) {
                selectedIndex =
                  proditem.outofstock == 'true' ? selectedIndex + 1 : selectedIndex;
              }
              proditem.prdquan = 0;
              proditem.selected = index == selectedIndex ? true : false;
              if (proditem.selected && !alreadySelected) {
                alreadySelected = proditem.selected;
              }
    
              return proditem;
            });
            if (selectedIndex >= it.proditems.length) {
              it.showmask = true;
              it.proditems[0].selected = true;
            } else {
              it.showmask = false;
            }
          }
       
          return it;
        });
       
        return prodList
      }
    
  
  }

  export function processDealList(dealList,cartList){
    console.log("processDealList")
    if (cartList.length == 0) {
      let prodList = dealList.map(it => {
        it.prdqun = 0;
        it.id = it.prdid;
        return it;
      });
      return prodList;
    } else {
      let prodList = dealList.map(it => {
        it.id = it.prdid;
        let a = cartList.filter(item => item.prditid == it.prditid);
        if (a.length > 0) {
          it.prdqun = a[0]['prdquan'];
          //console.log(a[0]['prdquan']);
        } else {
          it.prdqun = 0;
        }
        return it;
      });
      return prodList;
    }


  }

  export function convertampm(inpstr){
    
    let isAMPM = '';
    let hour = '';
    let min = '';
    let inpArr = inpstr.split(":");
    min = inpArr[1];
    if(parseInt(inpArr[0]) > 12)
    { isAMPM = 'PM';
    }else {
    isAMPM = 'AM';
    }
    hour = inpArr[0]%12 || 12;
    return `${hour}:${min} ${isAMPM}`;
}