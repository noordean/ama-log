class HomeController < ApplicationController
  before_action :check_logged_in!

  def index
  end
end
