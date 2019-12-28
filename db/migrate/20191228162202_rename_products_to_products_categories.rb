class RenameProductsToProductsCategories < ActiveRecord::Migration[5.2]
  def change
    rename_table :products, :products_sub_categories
  end
end
