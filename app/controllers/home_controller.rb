class HomeController < ApplicationController
  before_action :check_logged_in!

  def index
    @category_and_products = ProductCategory.all.map do |category|
      {
        category: category,
        products: category.products_sub_categories.select(:id, :name)
      }
    end
  end
end
