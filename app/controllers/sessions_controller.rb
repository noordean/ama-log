class SessionsController < ApplicationController
  before_action :check_logged_in!, only: %i[ new ]

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    response, status = if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      ["", 200]
    else
      ["Invalid username or password", 422]
    end
    render json: {message: response}, status: status
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
end
