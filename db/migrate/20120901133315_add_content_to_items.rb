class AddContentToItems < ActiveRecord::Migration
  def change
    add_column :items, :content, :text
  end
end
