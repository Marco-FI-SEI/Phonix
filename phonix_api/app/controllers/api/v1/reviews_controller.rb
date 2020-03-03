class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, except: [:index, :create]

  def index
    render json: Review.where(:headphone_id => params[:headphone_id])
  end

  def show
    render json: @review
  end

  def create
    render json: Review.create!(review_params)
  end

  def update
    render json: @review.update!(review_params)
  end

  def destroy
    @review.destroy
    render json: { message: "Review deleted!", reviewId: @review[:id] }, status: 200
  end

  private

  def set_review
    @review = Review.find_by!(id: params[:id])
  end

  def review_params
    params.require(:review).permit(
      :title,
      :body,
      :rating,
      :headphone_id,
    )
  end
end
