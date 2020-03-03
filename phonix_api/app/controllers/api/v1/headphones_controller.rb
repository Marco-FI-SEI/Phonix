class Api::V1::HeadphonesController < ApplicationController
  before_action :set_headphone, except: [:index, :create]

  def index
    render json: Headphone.all
  end

  def show
    render json: @headphone
  end

  def create
    render json: Headphone.create!(headphone_params)
  end

  def update
    render json: @headphone.update!(headphone_params)
  end

  def destroy
    @headphone.destroy
    render json: { message: "Headphone deleted!", headphoneId: @headphone[:id] }, status: 200
  end

  private

  def set_headphone
    @headphone = Headphone.find(params[:headphone][:id])
  end

  def headphone_params
    params.require(:headphone).permit(:model, :manufacturer)
  end
end
