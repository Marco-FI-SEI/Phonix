class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, except: [:index, :create]

  def index
    render json: Review.where(:headphone_id => params[:headphone_id])
  end

  def show
    render json: @review
  end

  def create
    review = Review.create!(review_params)
    render json: review
  end

  def update
    @review.update!(review_params)
    render json: @review
  end

  def destroy
    @review.destroy
    render json: { message: "Review deleted!" }, status: 200
  end

  private

  def set_review
    @review = Review.find(params[:review][:id])
  end

  def review_params
    params.require(:review).permit(:title, :body, :rating)
  end
end
