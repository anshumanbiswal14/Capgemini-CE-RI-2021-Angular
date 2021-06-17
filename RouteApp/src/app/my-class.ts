export class MyClass {

    doThings (name:string): string

    {

        return '['+name+']';
    }

    doStringWorks (email:string): string
    {

        let arr = email.split('@');

        let domainName = arr[1];

        return domainName;

    }

}