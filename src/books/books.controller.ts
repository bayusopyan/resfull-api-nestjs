import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { title } from 'process';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    private bookService:BooksService;
    constructor(booksService:BooksService){
        this.bookService = booksService;
    }

    @Get()
    getAllBooks(
        @Query('title') title:string,
        @Query('author') author:string,
        @Query('category') category:string,
        ){
        return this.bookService.getAllBooks(title,author,category);
    }

    @Get('/:id')
    getBook(@Param('id') id:string){
        return this.bookService.getBook(id);
    }


    @Post()
    crateBook(
        @Body('title') title:string,
        @Body('author') author:string,
        @Body('category') category:string,
    ){
        return this.bookService.createBook(title,author,category);
    }

    @Put('/:id')
    updateBook(
        @Param('id') id :string,
        @Body('title') title :string,
        @Body('author') author :string,
        @Body('category') category :string,
    ){
        return this.bookService.updateBook(id,title,author,category);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id:string){
        return this.bookService.deleteBook(id);
    }

}
