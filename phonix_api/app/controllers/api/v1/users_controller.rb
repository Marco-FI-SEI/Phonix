class Api::V1::UsersController < ApplicationController
  before_action :set_user, except: [:index, :create]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def create
    user = User.create!(user_params)
    render json: user
  end

  def update
    @user.update!(user_params)
    render json: @user
  end

  def destroy
    @user.destroy
    render json: { message: "User deleted!" }, status: 200
  end

  private

  def set_user
    @user = User.find(params[:user][:id])
  end

  def headphone_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
