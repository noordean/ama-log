class AdminController < ApplicationController
  before_action :require_access!

  def index
    @product_categories = ProductCategory.select(:id, :name)
    @products = Product.all.map do |product|
      {
        id: product&.id,
        name: product&.name,
        imageUrl: product&.image&.service_url
      }
    end
  end

  def add_product
    product_category = ProductCategory.find_by(id: params[:categoryName]) || ProductCategory.new(name: params[:categoryName])
    product_sub_category = ProductsSubCategory.find_by(id: params[:subCategoryName]) || ProductsSubCategory.new(name: params[:subCategoryName])
    product = Product.new(name: params[:productName])
    product.uploaded_image = params[:image]
    product_sub_category.products << product
    product_category.products_sub_categories << product_sub_category

    if product_category.save
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def require_access!
    redirect_to root_url if current_user.nil?
  end
end
