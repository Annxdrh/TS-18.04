abstract class Publisher{
     title: string
     author
     public pubYear: number,
     public copies: number
     get getTitle(): string{
         return this.title
}
     set setTitle(value:string){
         this.title = value 
}
static count: number = 0
     constructor(){
     Publisher.count ++
}
}
class Book extends Publisher implements Reception{
    pages: number
    delivery(item: Publisher): void{

    }
    receive(item: Publisher): void{

    }
}
class Magazine extends Publisher implements Reception{
    issue: number
    delivery(item: Publisher): void{

    }
    receive(item: Publisher): void{
        
    }
}

interface Reception{
    delivery(item: Publisher): void;
    receive(item: Publisher): void;
}

class Reader implements Reception{
    firstname: string
    lastname: string
    items: Publisher[]
    get getfirstname(): string{
      return this.firstname
}
    set setfirstname (value:string){
      this.firstname = value 
}
get getlastname(): string{
  return this.lastname
}
set setlastname (value:string){
  this.lastname = value 
}
    // get+ set
delivery(item: Publisher): void {
        if(item.copies == 0 || items.copies == Reader.items.length ) return
        item.copies = item.copies - 1
}
receive(item: Publisher): void {
        item.copies = item.copies - 1
}
}