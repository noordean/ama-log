class AdminController < ApplicationController
  before_action :require_access!

  def index
    @product_categories = ProductCategory.select(:id, :name)
  end

  private

  def require_access!
    redirect_to root_url if current_user.nil?
  end
end
