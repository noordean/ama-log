class ProductVariantsController < ApplicationController
  before_action :load_variant, only: %i[ destroy ]

  def destroy
    variant = @variant.destroy
    if variant.destroyed?
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def load_variant
    @variant = ProductVariant.find(params[:id])
  end
end
