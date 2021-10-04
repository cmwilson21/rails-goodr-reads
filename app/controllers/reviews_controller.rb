class ReviewsController < ApplicationController

  def index
    render json: Review.all
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review.user, status: :created
    else
      render json: {errors: reviews.errors.full_messages}, status: 422
    end
  end

  private
  def review_params
    params.permit(:book_id, :user_id, :content)
  end

end
