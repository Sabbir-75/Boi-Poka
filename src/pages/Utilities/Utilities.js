// Local Storage 

// Step 1 get item and parse and return
const getItemsfromlocalStorage = () => {
    const getData = localStorage.getItem("bookInfo")
    // jodi thake
    if (getData) {
        const convertToPars = JSON.parse(getData)
        return convertToPars
    }
    else {
        return []
    }
}

const addItem = (id) => {
    const newItem = getItemsfromlocalStorage()

    if (newItem.includes(id)) {
        alert("this item is alreafy Assign")
    }
    else{
        // push
        newItem.push(id)
        // stringify 
        const convertToStringify = JSON.stringify(newItem)
        //setItem
        localStorage.setItem("bookInfo", convertToStringify)
      console.log(convertToStringify);
    }
}


export {addItem}

