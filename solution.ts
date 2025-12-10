function formatValue(input) {
    if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        return !input;
    }
}


function getLength(input) {
    return input.length;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


function filterByRating(books: { title: string; rating: number }[], minRating: number = 4): { title: string; rating: number }[] {
  return books.filter(book => book.rating >= minRating);
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]) {
  return users.filter(user => user.isActive);
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}

function getUniqueValues(arr1: number[], arr2: number[]): number[] {
	return Array.from(new Set([...arr1, ...arr2]));
}


function calculateTotalPrice(products: Array<{ name: string; price: number; quantity: number; discount?: number }>): number {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product) {
      const discountAmount = product.discount ? (product.price * product.quantity * product.discount) / 100 : 0;
      total += product.price * product.quantity - discountAmount;
    }
  }
  return total;
}


