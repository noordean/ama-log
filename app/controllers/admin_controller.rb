class AdminController < ApplicationController
  before_action :require_access!

  def index
    @product_categories = ProductCategory.select(:id, :name)
  end

  def add_product
    puts "-------here---------"
    puts params
    puts "-------here---------"
  end

  private

  def require_access!
    redirect_to root_url if current_user.nil?
  end
end
