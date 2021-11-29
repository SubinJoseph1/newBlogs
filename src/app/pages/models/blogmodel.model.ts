export interface blog{

    title:string,
    author:string,
    description:string,
    content:string,
    url:string,
    urlToImage:string,
    publishedAt:Date;
}
export class Blogmodel implements blog{
    title="";
    author="";
    description="";
    content="";
    url="";
    urlToImage="";
    publishedAt=new Date();
}


export interface profile{
    fName:string,
    lName:string,
    email:string,
    mobileNo:string,
    address:string,
    country:string;
    textarea:string
    


}

export class Profilecls implements profile{

    fName="";
    lName="";
    email="";
    mobileNo="";
    address="";
    country="";
    textarea="";


}