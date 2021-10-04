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
      render json: {errors: books.errors.full_messages}, status: :not_created
    end
  end

  def update
      if @book.update(book_params)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

  def destroy
    @book = find_book
    if @book
      book.destroy
    else
      render_not_found
    end
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
