class AdminController < ApplicationController
  before_action :require_access!

  def index
    @product_categories = ProductCategory.select(:id, :name)
  end

  def add_product
    product_category = ProductCategory.find_by(id: params[:categoryName]) || ProductCategory.new(name: params[:categoryName])
    product = Product.find_by(id: params[:productName]) || Product.new(name: params[:productName])
    product_variant = ProductVariant.new(name: params[:variantName], value: params[:variantValue], price: params[:price])
    product_variant.uploaded_image = params[:image]
    product.product_variants << product_variant
    product_category.products << product
    product_category.save
    head :ok
  rescue => e
    logger.info "----------Some error here----------"
    logger.info e
    logger.info "----------Some error here----------"
    head :unprocessable_entity
  end

  private

  def require_access!
    redirect_to root_url if current_user.nil?
  end
end
