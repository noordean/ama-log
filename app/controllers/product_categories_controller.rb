class ProductCategoriesController < ApplicationController
  def products
    category_id = params[:id]
    products_categories = ProductCategory.find(category_id).products_sub_categories.select(:id, :name)
    render json: { products: products_categories }
  rescue ActiveRecord::RecordNotFound
    render json: { products: [] }
  end
end
