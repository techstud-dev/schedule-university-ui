export const useDate = (inputDate) => {
    console.log(inputDate)
    const date = new Date(inputDate * 1000);
  
    const day = String(date.getDate()).padStart(2, "0"); 
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear(); 
  
    return `${day}.${month}.${year}`;
  }