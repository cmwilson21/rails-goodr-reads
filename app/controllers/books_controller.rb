class BooksController < ApplicationController



  def index
   render json: Book.all
  end

  def show
    @book = find_book
    if @book
      render json: @book, status: :ok
    else
      render_not_found
    end
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book, status: :created
    else
      render json: {errors: books.errors.full_messages}, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private
  def book_params
    params.permit(:title, :author)
  end

  def find_book
    Book.find_by(id: params[:id])
  end

  def render_not_found
    render json: {error: "Book not found"}
  end


end
