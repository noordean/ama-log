class ApplicationController < ActionController::Base
  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def check_logged_in!
    redirect_to admin_index_path if current_user.present?
  end
end
