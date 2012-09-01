module ApplicationHelper
  def g_textile(text)
    if text
      result = ""
      while text =~ /(\[code\:([a-z].+?)\](.+?)\[\/code\])/m
        result << FormatableString.new($`).to_html_format + $&
        text = $'
      end
      result << FormatableString.new(text).to_html_format
      return result
    end
  end
end
